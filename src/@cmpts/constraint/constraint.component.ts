import { Component, OnInit } from '@angular/core';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { ConstraintElement, CONSTRAINT_ELEMENT_DATA } from './model';

@Component({
  selector: 'app-constraint',
  templateUrl: './constraint.component.html',
  styleUrls: ['./constraint.component.scss']
})
export class ConstraintComponent implements OnInit {

  name: string = '';
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
    { name: '创建时间', value: 'createdAt' },
  ];

  displayedColumns = ['category', 'method', 'userName', 'appName', 'functionName', 'expiredAt', 'origin', 'createdAt', 'remark', 'operate',];
  dataSource = CONSTRAINT_ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  paginatorChange(paginator: Paginator) {
    console.log(paginator);
  }

  onCancelClick(e: ConstraintElement): void {

  }

}
