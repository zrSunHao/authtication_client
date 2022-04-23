import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { SystemElement, SYSTEM_ELEMENT_DATA } from './model';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

  name: string = '';
  code: string = '';
  startAt: Date | null = null;
  endAt: Date | null = null;
  introOrRemark: string = '';

  total = 35;
  columnOp = 'createdAt';
  columns: Array<PaginatorColumn> = [
    { name: '名称', value: 'name' },
    { name: '标识码', value: 'code' },
    { name: '创建时间', value: 'createdAt' },
  ];

  displayedColumns = ['icon', 'name', 'code', 'createdAt', 'intro', 'remark', 'operate',];
  dataSource = SYSTEM_ELEMENT_DATA;

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  paginatorChange(paginator: Paginator) {
    console.log(paginator);
  }

  onEditClick(e: SystemElement): void {

  }

  onProgtamClick(e: SystemElement): void {
    this.router.navigate([`/system/program/${e.name}`]);
  }

  onRoleClick(e: SystemElement): void {
    this.router.navigate([`/system/role-list/${e.name}`]);
  }

  onDeleteClick(e: SystemElement): void {

  }
}
