import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PagingParameter, ResponsePagingResult } from 'src/@sun/models/paging.model';
import { ConfirmDialogComponent } from 'src/@sun/shared/cmpts/confirm-dialog/confirm-dialog.component';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { ConstraintService } from './constraint.service';
import { ConstraintElement, ConstraintSearchDto, CONSTRAINT_ELEMENT_DATA } from './model';

@Component({
  selector: 'app-constraint',
  templateUrl: './constraint.component.html',
  styleUrls: ['./constraint.component.scss']
})
export class ConstraintComponent implements OnInit {

  dto: ConstraintSearchDto = new ConstraintSearchDto();
  params = new PagingParameter<ConstraintSearchDto>();

  total = 0;
  columnOp = 'createdAt';
  columns: Array<PaginatorColumn> = [
    { name: 'ID', value: 'id' },
    { name: '类别', value: 'category' },
    { name: '方式', value: 'method' },
    { name: '到期时间', value: 'expiredAt' },
  ];

  displayedColumns = ['id', 'category', 'method', 'userName', 'sysName', 'functionName', 'expiredAt', 'origin', 'createdAt', 'remark', 'operate',];
  dataSource: Array<ConstraintElement> = [];

  constructor(private dialog: MatDialog,
    private notifyServ: NotifyService,
    private hostServ: ConstraintService) { }

  ngOnInit() {
    this.onResetClick();
  }

  onSearchClick(): void {
    this.params.filter = this.dto;
    this._loadData(this.params);
  }

  onResetClick(): void {
    this.dto = new ConstraintSearchDto();
    this.params.filter = this.dto;
    this.params.pageIndex = 1;
    this.params.pageSize = 10;
    this.params.sortColumn = this.columnOp;
    this.columnOp = 'createdAt';
    this._loadData(this.params);
  }

  onCancelClick(e: ConstraintElement): void {
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

  private _loadData(params: PagingParameter<ConstraintSearchDto>) {
    this.hostServ.serach(params).subscribe({
      next: res => { this._renderInfo(res); },
      error: err => {
        const msg = `数据加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
        this.dataSource = CONSTRAINT_ELEMENT_DATA; // TODO 删除
        this.total = 35; // TODO 删除
      }
    });
  }

  private _renderInfo(res: ResponsePagingResult<ConstraintElement>) {
    if (res.success) {
      this.total = res.rowsCount;
      this.dataSource = res.data;
    } else {
      const msg = `数据加载失败！！！ ${res.allMessages}`;
      this.notifyServ.notify(msg, 'error');
    }
  }

  private _cancel(e: ConstraintElement) {
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
