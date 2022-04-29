import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PagingParameter, ResponsePagingResult } from 'src/@sun/models/paging.model';
import { ConfirmDialogComponent } from 'src/@sun/shared/cmpts/confirm-dialog/confirm-dialog.component';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { DialogRoleComponent } from '../dialog-role/dialog-role.component';
import { RoleElement, RoleSearchDto, ROLE_ELEMENT_DATA } from '../model';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-system-role-list',
  templateUrl: './system-role-list.component.html',
  styleUrls: ['./system-role-list.component.scss']
})
export class SystemRoleListComponent implements OnInit {

  sysId: string = '';
  sysName: string = '';
  dto: RoleSearchDto = new RoleSearchDto();
  params = new PagingParameter<RoleSearchDto>();

  total = 0;
  columnOp = 'createdAt';
  columns: Array<PaginatorColumn> = [
    { name: '名称', value: 'name' },
    { name: '标识码', value: 'code' },
    { name: '等级', value: 'rank' },
    { name: '创建时间', value: 'createdAt' },
  ];

  displayedColumns = ['name', 'code', 'rank', 'limitedMethod', 'limitedExpiredAt', 'remark', 'createdAt', 'operate',];
  dataSource: RoleElement[] = [];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private notifyServ: NotifyService,
    private hostServ: SystemService,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sysId = params['sysId'];
      this.sysName = params['sysName'];
    });
    this.onResetClick();
  }

  onSearchClick(): void {
    this.dto.systemId = this.sysId;
    this.params.filter = this.dto;
    this._loadData(this.params);
  }

  onResetClick(): void {
    this.dto = new RoleSearchDto();
    this.dto.systemId = this.sysId;
    this.params.filter = this.dto;
    this.params.pageIndex = 1;
    this.params.pageSize = 10;
    this.params.sortColumn = this.columnOp;
    this.columnOp = 'createdAt';
    this._loadData(this.params);
  }

  onPreviousPageClick(): void {
    this.router.navigate([`/system`]);
  }

  onAddClick(): void {
    const r: RoleElement = {
      id: '', rank: 0, name: '', systemId: this.sysId, code: '', limitedMethod: '', limitedExpiredAt: null, createdAt: null, remark: ''
    };
    const dialogRef = this.dialog.open(DialogRoleComponent,
      { width: '520px', data: r, });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save' && result?.e) this._add(result?.e);
    });
  }

  onEditClick(e: RoleElement): void {
    const r: RoleElement = {
      id: e.id, rank: e.rank, name: e.name, systemId: e.systemId, code: e.code, limitedMethod: e.limitedMethod, limitedExpiredAt: e.limitedExpiredAt, createdAt: e.createdAt, remark: e.remark
    };
    const dialogRef = this.dialog.open(DialogRoleComponent,
      { width: '520px', data: r, });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save' && result?.e) this._update(result?.e);
    });
  }

  onFuntionsClick(e: RoleElement): void {
    this.router.navigate([`/system/role/funtions/${e.id}/${e.name}`]);
  }

  onDeleteClick(e: RoleElement): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '260px',
      data: `确定要删除【${e.name}】角色吗？`,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'yes') this._delete(e);
    });
  }

  paginatorChange(paginator: Paginator) {
    this.params.filter = this.dto;
    this.params.pageIndex = paginator.pageIndex;
    this.params.pageSize = paginator.pageSize;
    this.params.sortColumn = paginator.column;
    this.params.sort = paginator.sort;
    this._loadData(this.params);
  }

  private _loadData(params: PagingParameter<RoleSearchDto>): void {
    this.hostServ.serachRoles(params).subscribe({
      next: res => { this._renderInfo(res); },
      error: err => {
        const msg = `数据加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
        this.dataSource = ROLE_ELEMENT_DATA;  // TODO 删除
        this.total = 35;  // TODO 删除
      }
    });
  }

  private _renderInfo(res: ResponsePagingResult<RoleElement>): void {
    if (res.success) {
      this.total = res.rowsCount;
      this.dataSource = res.data;
    } else {
      const msg = `数据加载失败！！！ ${res.allMessages}`;
      this.notifyServ.notify(msg, 'error');
      this.dataSource = ROLE_ELEMENT_DATA;  // TODO 删除
      this.total = 35;  // TODO 删除
    }
  }

  private _add(e: RoleElement): void {
    this.hostServ.addRole(e).subscribe({
      next: res => {
        if (res.success) {
          this.notifyServ.notify(`角色【${e.name}】信息保存成功！！！`, 'success');
          this.onSearchClick()
        } else {
          const msg = `角色【${e.name}】信息保存失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `角色【${e.name}】信息保存失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _update(e: RoleElement): void {
    this.hostServ.addRole(e).subscribe({
      next: res => {
        if (res.success) {
          this.notifyServ.notify(`角色【${e.name}】信息更新成功！！！`, 'success');
          this.onSearchClick()
        } else {
          const msg = `角色【${e.name}】信息更新失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `角色【${e.name}】信息更新失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _delete(e: RoleElement): void {
    this.hostServ.deleteRole(e.id as string).subscribe({
      next: res => {
        if (res.success) {
          this.notifyServ.notify(`角色【${e.name}】已删除！！！`, 'success');
          this.onSearchClick()
        } else {
          const msg = `角色【${e.name}】删除失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `角色【${e.name}】删除失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

}
