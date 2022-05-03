import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PagingParameter, ResponsePagingResult } from 'src/@sun/models/paging.model';
import { ConfirmDialogComponent } from 'src/@sun/shared/cmpts/confirm-dialog/confirm-dialog.component';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { CustomerService } from '../customer.service';
import { DialogConstraintComponent } from '../dialog-constraint/dialog-constraint.component';
import { ConstraintElement, CONSTRAINT_ELEMENT_DATA, CustomerConstraintSearchDto } from '../model';

@Component({
  selector: 'app-customer-constraints',
  templateUrl: './customer-constraints.component.html',
  styleUrls: ['./customer-constraints.component.scss']
})
export class CustomerConstraintsComponent implements OnInit {

  dto: CustomerConstraintSearchDto = new CustomerConstraintSearchDto();
  params = new PagingParameter<CustomerConstraintSearchDto>();

  @Input() customerId: string = '';

  total = 0;
  pageSize: 5 | 10 | 20 | 50 = 5;
  columnOp = 'createdAt';
  columns: Array<PaginatorColumn> = [
    { name: 'ID', value: 'id' },
    { name: '类别', value: 'category' },
    { name: '方式', value: 'method' },
    { name: '到期时间', value: 'expiredAt' },
  ];

  displayedColumns = ['id', 'category', 'method', 'sysName', 'expiredAt', 'createdAt', 'origin', 'remark', 'operate',];
  dataSource: ConstraintElement[] = [];

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
    this.dto = new CustomerConstraintSearchDto();
    this.dto.customerId = this.customerId;
    this.params.filter = this.dto;
    this.params.pageIndex = 1;
    this.params.pageSize = this.pageSize;
    this.params.sortColumn = this.columnOp;
    this.columnOp = 'createdAt';
    this._loadData(this.params);
  }

  onAddClick(): void {
    const dialogRef = this.dialog.open(DialogConstraintComponent,
      { width: '520px', data: this.customerId, }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op  === 'save') {
        this.notifyServ.notify(`约束添加成功！！！`, 'success');
        this.onSearchClick();
      }
    });
  }

  onCancelClick(e: ConstraintElement) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '260px',
      data: `确定要删除ID为【${e.id}】的约束吗？`,
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

  private _loadData(params: PagingParameter<CustomerConstraintSearchDto>) {
    this.hostServ.searchConstraints(params).subscribe({
      next: res => { this._renderInfo(res); },
      error: err => {
        const msg = `约束数据加载失败！！！ ${err}`;
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
      const msg = `约束数据加载失败！！！ ${res.allMessages}`;
      this.notifyServ.notify(msg, 'error');
    }
  }

  private _delete(e: ConstraintElement): void {
    this.hostServ.deleteConstraint(e.id as string).subscribe({
      next: res => {
        if (res.success) {
          this.notifyServ.notify(`已取消ID为【${e.id}】的约束！！！`, 'success');
          this.onSearchClick()
        } else {
          const msg = `取消ID为【${e.id}】的约束失败！！！ ${res.allMessages}`;
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
