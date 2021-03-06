import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { OptionItem, PagingParameter, ResponsePagingResult } from 'src/@sun/models/paging.model';
import { ConfirmDialogComponent } from 'src/@sun/shared/cmpts/confirm-dialog/confirm-dialog.component';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';

import { ConstraintService } from './constraint.service';
import { CttElet, CttFilter, CTT_CATEGERY_OPS, CTT_METHOD_OPS } from '../../@sun/models/constraint.model';
import { AuthService } from 'src/@sun/shared/services/auth.service';

@Component({
  selector: 'app-constraint',
  templateUrl: './constraint.component.html',
  styleUrls: ['./constraint.component.scss']
})
export class ConstraintComponent implements OnInit {

  dto: CttFilter = new CttFilter();
  params = new PagingParameter<CttFilter>();

  categeryOps: OptionItem[] = CTT_CATEGERY_OPS;
  methodOps: OptionItem[] = CTT_METHOD_OPS;

  total = 0;
  columnOp = 'createdAt';
  columns: Array<PaginatorColumn> = [
    { name: '到期时间', value: 'expiredAt' },
    { name: '创建时间', value: 'createdAt' },
  ];

  displayedColumns = ['id', 'category', 'method', 'ctmName', 'sysName', 'functName', 'expiredAt', 'origin', 'createdAt', 'remark', 'operate',];
  dataSource: Array<CttElet> = [];

  constructor(private dialog: MatDialog,
    private notifyServ: NotifyService,
    private hostServ: ConstraintService,
    private authServ: AuthService,) {
  }

  ngOnInit() {
    this.onResetClick();
    this.authServ.log('进入约束管理页面', `无`);
  }

  onSearchClick(): void {
    this.params.filter = this.dto;
    this._loadData(this.params);
  }

  onResetClick(): void {
    this.dto = new CttFilter();
    this.params.filter = this.dto;
    this.params.pageIndex = 1;
    this.params.pageSize = 10;
    this.params.sortColumn = this.columnOp;
    this.columnOp = 'createdAt';
    this._loadData(this.params);
  }

  onCancelClick(e: CttElet): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '260px',
      data: `确定要删除该约束吗？`,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'yes') this._cancel(e);
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

  private _loadData(params: PagingParameter<CttFilter>) {
    this.hostServ.serach(params).subscribe({
      next: res => { this._renderInfo(res); },
      error: err => {
        const msg = `数据加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _renderInfo(res: ResponsePagingResult<CttElet>) {
    if (res.success) {
      this.total = res.rowsCount;
      this.dataSource = res.data;
    } else {
      const msg = `数据加载失败！！！ ${res.allMessages}`;
      this.notifyServ.notify(msg, 'error');
    }
  }

  private _cancel(e: CttElet) {
    this.hostServ.cancel(e.id).subscribe({
      next: res => {
        if (res.success) {
          this.notifyServ.notify('约束取消成功！！！', 'success');
          this._loadData(this.params);
        } else {
          const msg = `约束取消失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `约束取消失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

}
