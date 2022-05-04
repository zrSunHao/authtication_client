import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { OptionItem, PagingParameter, ResponsePagingResult } from 'src/@sun/models/paging.model';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { CtmCttElet, CONSTRAINT_ELEMENT_DATA, CtmCttSearchDto } from 'src/@sun/models/customer.model';

import { MyService } from '../my.service';
import { CTT_CATEGERY_OPS, CTT_METHOD_OPS } from 'src/@sun/models/constraint.model';

@Component({
  selector: 'app-customer-constraints',
  templateUrl: './customer-constraints.component.html',
  styleUrls: ['./customer-constraints.component.scss']
})
export class CustomerConstraintsComponent implements OnInit {

  dto: CtmCttSearchDto = new CtmCttSearchDto();
  params = new PagingParameter<CtmCttSearchDto>();
  categeryOps: OptionItem[] = [CTT_CATEGERY_OPS[0], CTT_CATEGERY_OPS[1], CTT_CATEGERY_OPS[2]];
  methodOps: OptionItem[] = CTT_METHOD_OPS;

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

  displayedColumns = ['id', 'category', 'method', 'sysName', 'expiredAt', 'createdAt', 'origin', 'remark',];
  dataSource: CtmCttElet[] = [];

  constructor(private dialog: MatDialog,
    private notifyServ: NotifyService,
    private hostServ: MyService) {
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
    this.dto = new CtmCttSearchDto();
    this.dto.customerId = this.customerId;
    this.params.filter = this.dto;
    this.params.pageIndex = 1;
    this.params.pageSize = this.pageSize;
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

  private _loadData(params: PagingParameter<CtmCttSearchDto>) {
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

  private _renderInfo(res: ResponsePagingResult<CtmCttElet>) {
    if (res.success) {
      this.total = res.rowsCount;
      this.dataSource = res.data;
    } else {
      const msg = `约束数据加载失败！！！ ${res.allMessages}`;
      this.notifyServ.notify(msg, 'error');
    }
  }

}
