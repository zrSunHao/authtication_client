import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { ProgramElement, PROGRAM_ELEMENT_DATA } from './model';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  name: string = '';
  type: '1' | '2' | '3' | '4' | '' = '';
  code: string = '';
  introOrRemark: string = '';

  total = 35;
  columnOp = 'createdAt';
  columns: Array<PaginatorColumn> = [
    { name: '名称', value: 'name' },
    { name: '类别', value: 'type' },
    { name: '编码', value: 'code' },
    { name: '创建时间', value: 'createdAt' },
  ];

  displayedColumns = ['name', 'type', 'code', 'createdAt', 'intro', 'remark', 'operate',];
  dataSource = PROGRAM_ELEMENT_DATA;

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  paginatorChange(paginator: Paginator) {
    console.log(paginator);
  }

  detail_click(e: ProgramElement): void {
    this.router.navigate([`/program/detail/${e.name}`]);
  }

  edit_click(e: ProgramElement): void {

  }

  delete_click(e: ProgramElement): void {

  }

}
