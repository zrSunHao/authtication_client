import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PagingParameter, ResponsePagingResult } from 'src/@sun/models/paging.model';
import { ConfirmDialogComponent } from 'src/@sun/shared/cmpts/confirm-dialog/confirm-dialog.component';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { CustomerService } from '../customer.service';
import { DialogRoleComponent } from '../dialog-role/dialog-role.component';
import { CustomerRoleAddDto, CustomerRoleElement, CustomerRoleSearchDto, CUSTOMER_ROLE_ELEMENT_DATA } from '../model';

@Component({
  selector: 'app-customer-roles',
  templateUrl: './customer-roles.component.html',
  styleUrls: ['./customer-roles.component.scss']
})
export class CustomerRolesComponent implements OnInit {

  dto: CustomerRoleSearchDto = new CustomerRoleSearchDto();
  params = new PagingParameter<CustomerRoleSearchDto>();

  @Input() customerId: string = '';

  total = 0;
  pageSize: 5 | 10 | 20 | 50 = 5;
  columnOp = 'createdAt';
  columns: Array<PaginatorColumn> = [
    { name: '系统名称', value: 'sysName' },
    { name: '角色名称', value: 'roleName' },
    { name: '角色等级', value: 'roleRank' },
    { name: '关联时间', value: 'createdAt' },
  ];

  displayedColumns = ['sysLogo', 'sysName', 'roleName', 'rank', 'createdAt', 'remark', 'operate',];
  dataSource: CustomerRoleElement[] = [];

  constructor(private dialog: MatDialog,
    private notifyServ: NotifyService,
    private hostServ: CustomerService) {
  }

  ngOnInit() {
    this.onResetClick();
  }

  onSearchClick(): void {
    this.dto.customerId = this.customerId;
    this.params.filter = this.dto;
    this.params.pageSize = this.pageSize;
    this._loadData(this.params);
  }

  onResetClick(): void {
    this.dto = new CustomerRoleSearchDto();
    this.dto.customerId = this.customerId;
    this.params.filter = this.dto;
    this.params.pageIndex = 1;
    this.params.pageSize = this.pageSize;
    this.params.sortColumn = this.columnOp;
    this.columnOp = 'createdAt';
    this._loadData(this.params);
  }

  onAddClick(): void {
    const dto = new CustomerRoleAddDto();
    dto.customerId = this.customerId;
    const dialogRef = this.dialog.open(DialogRoleComponent,
      { width: '360px', data: dto, }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save') {
        this.notifyServ.notify(`角色添加成功！！！`, 'success');
        this.onSearchClick();
      }
    });
  }

  onEditClick(e: CustomerRoleElement) {
    const dto = new CustomerRoleAddDto();
    dto.customerId = this.customerId;
    dto.sysId = e.sysId;
    dto.roleId = e.roleId;
    const dialogRef = this.dialog.open(DialogRoleComponent,
      { width: '360px', data: dto, }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save') {
        this.notifyServ.notify(`角色修改成功！！！`, 'success');
        this.onSearchClick();
      }
    });
  }

  onCancelClick(e: CustomerRoleElement) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '260px',
      data: `确定要取消与【${e.roleName}】角色的关联吗？`,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'yes') this._delete(e);
    });
  }

  onPaginatorChange(paginator: Paginator) {
    this.params.filter = this.dto;
    this.params.pageIndex = paginator.pageIndex;
    this.params.pageSize = paginator.pageSize;
    this.params.sortColumn = paginator.column;
    this.params.sort = paginator.sort;
    this._loadData(this.params);
  }

  private _loadData(params: PagingParameter<CustomerRoleSearchDto>) {
    this.hostServ.searchRoles(params).subscribe({
      next: res => { this._renderInfo(res); },
      error: err => {
        const msg = `角色数据加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
        this.dataSource = CUSTOMER_ROLE_ELEMENT_DATA; // TODO 删除
        this.total = 35; // TODO 删除
      }
    });
  }

  private _renderInfo(res: ResponsePagingResult<CustomerRoleElement>) {
    if (res.success) {
      this.total = res.rowsCount;
      this.dataSource = res.data;
    } else {
      const msg = `角色数据加载失败！！！ ${res.allMessages}`;
      this.notifyServ.notify(msg, 'error');
    }
  }

  private _delete(e: CustomerRoleElement): void {
    this.hostServ.deleteRole(e.id as string).subscribe({
      next: res => {
        if (res.success) {
          this.notifyServ.notify(`已取消与【${e.roleName}】角色的关联！！！`, 'success');
          this.onSearchClick()
        } else {
          const msg = `取消与【${e.roleName}】角色的关联失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `取消与【${e.roleName}】角色的关联失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

}
