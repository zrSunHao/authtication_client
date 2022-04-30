import { Component, Input, OnInit } from '@angular/core';
import { PagingParameter, ResponsePagingResult } from 'src/@sun/models/paging.model';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { CustomerService } from '../customer.service';
import { CustomerLogSearchDto, LogElement, LOG_ELEMENT_DATA } from '../model';

@Component({
  selector: 'app-customer-logs',
  templateUrl: './customer-logs.component.html',
  styleUrls: ['./customer-logs.component.scss']
})
export class CustomerLogsComponent implements OnInit {

  dto: CustomerLogSearchDto = new CustomerLogSearchDto();
  params = new PagingParameter<CustomerLogSearchDto>();

  @Input() customerId: string = '';

  total = 0;
  pageSize: 5 | 10 | 20 | 50 = 5;
  columnOp = 'createdAt';
  columns: Array<PaginatorColumn> = [
    { name: '操作', value: 'operate' },
    { name: '系统名称', value: 'sysName' },
    { name: '角色名称', value: 'roleName' },
    { name: '角色等级', value: 'roleRank' },
    { name: '创建时间', value: 'createdAt' },
  ];

  displayedColumns = ['operate', 'sysName', 'roleName', 'roleRank', 'createdAt', 'remark'];
  dataSource: LogElement[] = [];

  constructor(private notifyServ: NotifyService,
    private hostServ: CustomerService) { }

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
    this.dto = new CustomerLogSearchDto();
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

  private _loadData(params: PagingParameter<CustomerLogSearchDto>) {
    this.hostServ.searchLogs(params).subscribe({
      next: res => { this._renderInfo(res); },
      error: err => {
        const msg = `日志数据加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
        this.dataSource = LOG_ELEMENT_DATA; // TODO 删除
        this.total = 35; // TODO 删除
      }
    });
  }

  private _renderInfo(res: ResponsePagingResult<LogElement>) {
    if (res.success) {
      this.total = res.rowsCount;
      this.dataSource = res.data;
    } else {
      const msg = `日志数据加载失败！！！ ${res.allMessages}`;
      this.notifyServ.notify(msg, 'error');
    }
  }

}
