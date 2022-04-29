import { Component, Input, OnInit } from '@angular/core';
import { PagingParameter } from 'src/@sun/models/paging.model';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { CustomerLogSearchDto, LOG_ELEMENT_DATA } from '../model';

@Component({
  selector: 'app-customer-logs',
  templateUrl: './customer-logs.component.html',
  styleUrls: ['./customer-logs.component.scss']
})
export class CustomerLogsComponent implements OnInit {

  dto: CustomerLogSearchDto = new CustomerLogSearchDto();
  params = new PagingParameter<CustomerLogSearchDto>();

  @Input() customerId: string = '';

  total = 35;
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
  dataSource = LOG_ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  onSearchClick(): void {

  }

  onResetClick(): void {

  }

  onPaginatorChange(paginator: Paginator) {
    console.log(paginator);
  }

}
