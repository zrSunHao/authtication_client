import { Component, OnInit } from '@angular/core';
import { SectionElement, SECTION_ELEMENT_DATA } from '../model';

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.scss']
})
export class ProgramDetailComponent implements OnInit {

  sections: SectionElement[] = SECTION_ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
