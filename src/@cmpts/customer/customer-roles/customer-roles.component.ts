import { Component, OnInit } from '@angular/core';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { CustomerRoleElement, CUSTOMER_ROLE_ELEMENT_DATA } from '../model';

@Component({
  selector: 'app-customer-roles',
  templateUrl: './customer-roles.component.html',
  styleUrls: ['./customer-roles.component.scss']
})
export class CustomerRolesComponent implements OnInit {

  appName: string = '';
  roleName: string = '';
  remark: string = '';

  total = 35;
  columnOp = 'createdAt';
  columns: Array<PaginatorColumn> = [
    { name: 'App', value: 'appName' },
    { name: '角色', value: 'roleName' },
    { name: '创建时间', value: 'createdAt' },
  ];

  displayedColumns = ['avatar', 'appName', 'roleName', 'createdAt', 'remark', 'operate',];
  dataSource = CUSTOMER_ROLE_ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  paginatorChange(paginator: Paginator) {
    console.log(paginator);
  }

  onEditClick(e: CustomerRoleElement) {

  }

  onCancelClick(e: CustomerRoleElement) {

  }

}
