import { Component, Input, OnInit } from '@angular/core';
import { PagingParameter } from 'src/@sun/models/paging.model';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { CustomerRoleElement, CustomerRoleSearchDto, CUSTOMER_ROLE_ELEMENT_DATA } from '../model';

@Component({
  selector: 'app-customer-roles',
  templateUrl: './customer-roles.component.html',
  styleUrls: ['./customer-roles.component.scss']
})
export class CustomerRolesComponent implements OnInit {

  dto: CustomerRoleSearchDto = new CustomerRoleSearchDto();
  params = new PagingParameter<CustomerRoleSearchDto>();

  @Input() customerId: string = '';

  total = 35;
  pageSize: 5 | 10 | 20 | 50 = 5;
  columnOp = 'createdAt';
  columns: Array<PaginatorColumn> = [
    { name: '系统名称', value: 'sysName' },
    { name: '角色', value: 'roleName' },
    { name: '关联时间', value: 'createdAt' },
  ];

  displayedColumns = ['sysLogo', 'sysName', 'roleName', 'rank', 'createdAt', 'remark', 'operate',];
  dataSource: CustomerRoleElement[] = CUSTOMER_ROLE_ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
    console.log(this.customerId);
    this.onResetClick();
  }

  onSearchClick(): void {

  }

  onResetClick(): void {

  }

  onAddClick(): void {

  }

  onEditClick(e: CustomerRoleElement) {

  }

  onCancelClick(e: CustomerRoleElement) {

  }

  onPaginatorChange(paginator: Paginator) {
    console.log(paginator);
  }

}
