import { Component, OnInit } from '@angular/core';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { LOG_ELEMENT_DATA } from '../model';

@Component({
  selector: 'app-customer-logs',
  templateUrl: './customer-logs.component.html',
  styleUrls: ['./customer-logs.component.scss']
})
export class CustomerLogsComponent implements OnInit {

  operate: string = '';
  appName: string = '';
  startAt: Date | null = null;
  endAt: Date | null = null;

  total = 35;
  columnOp = 'createdAt';
  columns: Array<PaginatorColumn> = [
    { name: '操作', value: 'operate' },
    { name: 'App', value: 'appName' },
    { name: '角色', value: 'roleName' },
    { name: '创建时间', value: 'createdAt' },
  ];

  displayedColumns = ['operate', 'appName', 'roleName', 'createdAt', 'remark'];
  dataSource = LOG_ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  paginatorChange(paginator: Paginator) {
    console.log(paginator);
  }

}
