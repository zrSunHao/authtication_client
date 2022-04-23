import { Component, Input, OnInit } from '@angular/core';
import { ProgramElement, PROGRAM_ELEMENT_DATA } from '../model';

@Component({
  selector: 'app-system-section',
  templateUrl: './system-section.component.html',
  styleUrls: ['./system-section.component.scss']
})
export class SystemSectionComponent implements OnInit {

  name: string = '';
  type: '1' | '2' | '3' | '4' | '' = '';

  @Input() sections: ProgramElement[] = PROGRAM_ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  onAddClick(e: ProgramElement): void {

  }
}
