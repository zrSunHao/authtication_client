import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { OptionItem, PagingParameter, ResponsePagingResult } from 'src/@sun/models/paging.model';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { CtmCttAddDto, CtmRoleUpdateDto } from 'src/@sun/models/customer.model';
import { CttCategory, CTT_METHOD_OPS } from 'src/@sun/models/constraint.model';
import { SystemService } from '../system.service';
import { ROLE_RANK_OPS, SysCtmElet, SysCtmFilter } from 'src/@sun/models/system.model';
import { DialogCustomerRoleComponent } from '../dialog-customer-role/dialog-customer-role.component';
import { ConfirmDialogComponent } from 'src/@sun/shared/cmpts/confirm-dialog/confirm-dialog.component';
import { DialogCtmCttComponent } from '../dialog-ctm-ctt/dialog-ctm-ctt.component';
import { AuthService } from 'src/@sun/shared/services/auth.service';

@Component({
  selector: 'app-sys-customers',
  templateUrl: './sys-customers.component.html',
  styleUrls: ['./sys-customers.component.scss']
})
export class SysCustomersComponent implements OnInit {

  sysId: string = '';
  sysName: string = '';
  dto: SysCtmFilter = new SysCtmFilter();
  params = new PagingParameter<SysCtmFilter>();
  methodOps: OptionItem[] = CTT_METHOD_OPS;
  rankOps: OptionItem[] = ROLE_RANK_OPS;
  roleOptions: OptionItem[] = [];

  total = 0;
  columnOp = 'lastLoginAt';
  columns: Array<PaginatorColumn> = [
    { name: '账号', value: 'name' },
    { name: '最近登陆时间', value: 'lastLoginAt' },
  ];

  displayedColumns = ['avatar', 'name', 'nickname', 'limited', 'rank', 'roleName', 'lastLoginAt', 'remark', 'operate',];
  dataSource: SysCtmElet[] = [];

  constructor(private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private notifyServ: NotifyService,
    private hostServ: SystemService,
    private authServ: AuthService,) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sysId = params['sysId'];
      this.sysName = params['sysName'];
      this._loadRoleItems(this.sysId);
      this.onResetClick();
      this.authServ.log('进入系统客户管理页面', `系统标识[${this.sysId}]`);
    });
  }

  onSearchClick(): void {
    this.params.filter = this.dto;
    this._loadData(this.params);
  }

  onResetClick(): void {
    this.dto = new SysCtmFilter();
    this.dto.sysId = this.sysId;
    this.params.filter = this.dto;
    this.params.pageIndex = 1;
    this.params.pageSize = 10;
    this.params.sortColumn = this.columnOp;
    this.columnOp = 'createdAt';
    this._loadData(this.params);
  }

  onPaginatorChange(paginator: Paginator) {
    this.params.filter = this.dto;
    this.params.pageIndex = paginator.pageIndex;
    this.params.pageSize = paginator.pageSize;
    this.params.sortColumn = paginator.column;
    this.params.sort = paginator.sort;
    this._loadData(this.params);
  }

  onRoleClick(e: SysCtmElet): void {
    const dto = new CtmRoleUpdateDto();
    dto.ctmId = e.id as string;
    dto.sysId = this.sysId;
    dto.roleId = e.roleId;
    const dialogRef = this.dialog.open(DialogCustomerRoleComponent,
      { width: '360px', data: dto, }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save') {
        this.notifyServ.notify(`角色修改成功！！！`, 'success');
        this.onSearchClick();
      }
    });
  }

  onAddCttClick(e: SysCtmElet): void {
    const data = new CtmCttAddDto();
    data.sysId = this.sysId;
    data.ctmId = e.id as string;
    data.category = CttCategory.customer_one_system;
    const dialogRef = this.dialog.open(DialogCtmCttComponent,
      { width: '360px', data: data, }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save') {
        this.notifyServ.notify(`约束添加成功！！！`, 'success');
        this.onSearchClick();
      }
    });
  }

  onCancelCttClick(e: SysCtmElet): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '360px',
      data: `确定要取消客户【${e.name}】的约束吗？`,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'yes') this._delete(e);
    });
  }

  onPreviousPageClick(): void {
    this.router.navigate([`/system`]);
  }

  private _loadData(params: PagingParameter<SysCtmFilter>) {
    this.hostServ.searchCtms(params).subscribe({
      next: res => { this._renderInfo(res); },
      error: err => {
        const msg = `数据加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _renderInfo(res: ResponsePagingResult<SysCtmElet>) {
    if (res.success) {
      this.total = res.rowsCount;
      this.dataSource = res.data;
    } else {
      const msg = `数据加载失败！！！ ${res.allMessages}`;
      this.notifyServ.notify(msg, 'error');
    }
  }

  private _loadRoleItems(sysId: string): void {
    this.hostServ.getRoleItems(sysId).subscribe({
      next: res => {
        if (res.success) {
          this.roleOptions = res.data as OptionItem[];
        } else {
          const msg = `角色选项信息加载失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `角色选项信息加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
        this.roleOptions = [
          { key: '1', value: '会员' },
          { key: '2', value: '管理员' },]
      }
    });
  }

  private _delete(e: SysCtmElet): void {
    this.hostServ.cancelCtmCtt(e.id as string, this.sysId).subscribe({
      next: res => {
        if (res.success) {
          this.notifyServ.notify(`已取消客户【${e.name}】的约束！！！`, 'success');
          this.onSearchClick()
        } else {
          const msg = `取消客户【${e.name}】的约束失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `取消ID为【${e.id}】的约束失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

}
