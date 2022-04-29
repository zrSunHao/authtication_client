import { Component, Input, OnInit } from '@angular/core';
import { PagingParameter } from 'src/@sun/models/paging.model';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
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

  total = 35;
  pageSize: 5 | 10 | 20 | 50 = 5;
  columnOp = 'createdAt';
  columns: Array<PaginatorColumn> = [
    { name: '类别', value: 'category' },
    { name: '方式', value: 'method' },
    { name: '到期时间', value: 'expiredAt' },
    { name: '创建时间', value: 'createdAt' },
  ];

  displayedColumns = ['category', 'method', 'sysName', 'expiredAt', 'createdAt', 'origin', 'remark', 'operate',];
  dataSource: ConstraintElement[] = CONSTRAINT_ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
    this.onResetClick();
  }

  onSearchClick(): void {

  }

  onResetClick(): void {

  }

  onCancelClick(e: ConstraintElement) {

  }

  onPaginatorChange(paginator: Paginator) {
    console.log(paginator);
  }
}
