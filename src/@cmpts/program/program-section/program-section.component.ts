import { Component, Input, OnInit } from '@angular/core';
import { SectionElement, SECTION_ELEMENT_DATA } from '../model';

@Component({
  selector: 'app-program-section',
  templateUrl: './program-section.component.html',
  styleUrls: ['./program-section.component.scss']
})
export class ProgramSectionComponent implements OnInit {

  @Input() sections: SectionElement[] = SECTION_ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  onEditClick(e: SectionElement): void {

  }

  onDeleteClick(e: SectionElement): void {

  }

}

