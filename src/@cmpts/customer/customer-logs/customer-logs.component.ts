import { Component, Input, OnInit } from '@angular/core';
import { PagingParameter, ResponsePagingResult } from 'src/@sun/models/paging.model';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { CustomerService } from '../customer.service';
import { CtmLogFilter, CtmLogElet } from 'src/@sun/models/customer.model';

@Component({
  selector: 'app-customer-logs',
  templateUrl: './customer-logs.component.html',
  styleUrls: ['./customer-logs.component.scss']
})
export class CustomerLogsComponent implements OnInit {

  dto: CtmLogFilter = new CtmLogFilter();
  params = new PagingParameter<CtmLogFilter>();

  @Input() customerId: string = '';

  total = 0;
  pageSize: 5 | 10 | 20 | 50 = 5;
  columnOp = 'createdAt';
  columns: Array<PaginatorColumn> = [
    { name: '操作', value: 'operate' },
    { name: '创建时间', value: 'createdAt' },
  ];

  displayedColumns = ['operate', 'sysName', 'pgmName', 'roleName', 'createdAt', 'remark'];
  dataSource: CtmLogElet[] = [];

  constructor(private notifyServ: NotifyService,
    private hostServ: CustomerService) { }

  ngOnInit() {
    this.onResetClick();
  }

  onSearchClick(): void {
    this.dto.ctmId = this.customerId;
    this.params.filter = this.dto;
    this.params.pageSize = this.pageSize;
    this._loadData(this.params);
  }

  onResetClick(): void {
    this.dto = new CtmLogFilter();
    this.dto.ctmId = this.customerId;
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

  private _loadData(params: PagingParameter<CtmLogFilter>) {
    this.hostServ.searchLogs(params).subscribe({
      next: res => { this._renderInfo(res); },
      error: err => {
        const msg = `日志数据加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _renderInfo(res: ResponsePagingResult<CtmLogElet>) {
    if (res.success) {
      this.total = res.rowsCount;
      this.dataSource = res.data;
    } else {
      const msg = `日志数据加载失败！！！ ${res.allMessages}`;
      this.notifyServ.notify(msg, 'error');
    }
  }

}
