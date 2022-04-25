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

  total = 35;
  columnOp = 'createdAt';
  columns: Array<PaginatorColumn> = [
    { name: '类别', value: 'category' },
    { name: '方式', value: 'method' },
    { name: '到期时间', value: 'expiredAt' },
    { name: '创建时间', value: 'createdAt' },
  ];

  displayedColumns = ['category', 'method', 'userName', 'sysName', 'functionName', 'expiredAt', 'origin', 'createdAt', 'remark', 'operate',];
  dataSource: Array<ConstraintElement> = CONSTRAINT_ELEMENT_DATA;

  constructor(private dialog: MatDialog,
    private notifyServ: NotifyService,
    private hostServ: ConstraintService) { }

  ngOnInit() {
    this.onSearchClick();
  }

  onPaginatorChange(paginator: Paginator) {
    console.log(paginator);
    const params = new PagingParameter<ConstraintSearchDto>();
    params.filter = this.dto;
    params.pageIndex = paginator.pageIndex;
    params.pageSize = paginator.pageSize;
    params.sortColumn = paginator.column;
    params.sort = paginator.sort;
    this.hostServ.serach(params);
  }

  onSearchClick(): void {
    const params = new PagingParameter<ConstraintSearchDto>();
    params.filter = this.dto;
    params.pageIndex = 1;
    params.pageSize = 10;
    params.sortColumn = this.columnOp;

    this.hostServ.serach(params).subscribe({
      next: res => { this._renderInfo(res); },
      error: err => { console.error(err); }
    })
  }

  onResetClick(): void {
    this.dto = new ConstraintSearchDto();
    this.columnOp = 'createdAt';
    this.onSearchClick();
  }

  onCancelClick(e: ConstraintElement): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '260px',
      data: `确定要删除该约束吗？`,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'yes') {
        this.notifyServ.notify('约束取消成功！！！', 'success');
      }
    });
  }

  private _renderInfo(res: ResponsePagingResult<ConstraintElement>) {
    if (res.success) {
      // TODO 返回的数据赋值给页面
      this.notifyServ.notify('数据加载成功！！！', 'success');
    } else {
      const msg = `数据加载失败！！！ ${res.allMessages}`;
      this.notifyServ.notify(msg, 'error');
    }
  }

}
