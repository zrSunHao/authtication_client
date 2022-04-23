import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { RoleElement, ROLE_ELEMENT_DATA } from '../model';

@Component({
  selector: 'app-system-role-list',
  templateUrl: './system-role-list.component.html',
  styleUrls: ['./system-role-list.component.scss']
})
export class SystemRoleListComponent implements OnInit {

  name: string = '';
  limitedMethod: '1' | '2' | '' = '';
  code: string = '';
  remark: string = '';

  total = 35;
  columnOp = 'createdAt';
  columns: Array<PaginatorColumn> = [
    { name: '名称', value: 'name' },
    { name: '编码', value: 'code' },
    { name: '约束', value: 'limitedMethod' },
    { name: '创建时间', value: 'createdAt' },
  ];

  displayedColumns = ['name', 'code', 'limitedMethod', 'limitedExpiredAt', 'createdAt', 'remark', 'operate',];
  dataSource = ROLE_ELEMENT_DATA;

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  paginatorChange(paginator: Paginator) {
    console.log(paginator);
  }

  onEditClick(e: RoleElement): void {

  }

  onFuntionsClick(e: RoleElement): void {
    this.router.navigate([`/system/role/funtions/${e.name}`]);
  }

  onLimitClick(e: RoleElement): void {

  }

  ondeleteClick(e: RoleElement): void {

  }

}
