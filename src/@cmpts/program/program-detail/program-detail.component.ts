import { Component, OnInit } from '@angular/core';
import { PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { FunctionElement, FUNCTION_ELEMENT_DATA, SectionElement, SECTION_ELEMENT_DATA } from '../model';

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.scss']
})
export class ProgramDetailComponent implements OnInit {

  sections: SectionElement[] = SECTION_ELEMENT_DATA;

  total = 35;
  columnOp = 'createdAt';
  columns: Array<PaginatorColumn> = [
    { name: '名称', value: 'name' },
    { name: '编码', value: 'code' },
    { name: '约束', value: 'constraint' },
  ];

  displayedColumns = ['name', 'code', 'constraint', 'limitedExpireAt', 'remark', 'operate',];
  dataSource = FUNCTION_ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  limit_click(element: FunctionElement): void {

  }

  edit_click(element: FunctionElement): void {

  }

  delete_click(element: FunctionElement): void {

  }

}
