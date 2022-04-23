import { Component, OnInit } from '@angular/core';
import { ProgramElement, PROGRAM_ELEMENT_DATA } from '../model';

@Component({
  selector: 'app-system-program',
  templateUrl: './system-program.component.html',
  styleUrls: ['./system-program.component.scss']
})
export class SystemProgramComponent implements OnInit {

  name: string = '';
  type: '1' | '2' | '3' | '4' | '' = '';
  introOrRemark: string = '';

  sections: ProgramElement[] = PROGRAM_ELEMENT_DATA;
  displayedColumns = ['name', 'type', 'code', 'intro', 'remark', 'operate',];
  dataSource = PROGRAM_ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }


  delete_click(e: ProgramElement): void {

  }
}
