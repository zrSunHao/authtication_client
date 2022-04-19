import { Component, OnInit } from '@angular/core';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { ConstraintElement, CONSTRAINT_ELEMENT_DATA } from '../model';

@Component({
  selector: 'app-customer-constraints',
  templateUrl: './customer-constraints.component.html',
  styleUrls: ['./customer-constraints.component.scss']
})
export class CustomerConstraintsComponent implements OnInit {

  category: string = '';
  effective: string = '';
  startAt: Date | null = null;
  endAt: Date | null = null;

  total = 35;
  columnOp = 'createdAt';
  columns: Array<PaginatorColumn> = [
    { name: '类别', value: 'category' },
    { name: '方式', value: 'method' },
    { name: '到期时间', value: 'expiredAt' },
    { name: 'App', value: 'appName' },
    { name: '创建时间', value: 'createdAt' },
  ];

  displayedColumns = ['category', 'method', 'appName', 'expiredAt', 'origin', 'createdAt', 'remark', 'operate',];
  dataSource = CONSTRAINT_ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  onCancelClick(e: ConstraintElement) {

  }

  paginatorChange(paginator: Paginator) {
    console.log(paginator);
  }
}
