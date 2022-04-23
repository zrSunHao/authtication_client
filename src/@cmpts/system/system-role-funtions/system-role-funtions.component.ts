import { Component, OnInit } from '@angular/core';
import { ROLE_SECTION_ELEMENT_DATA, SectionElement } from '../model';

@Component({
  selector: 'app-system-role-funtions',
  templateUrl: './system-role-funtions.component.html',
  styleUrls: ['./system-role-funtions.component.scss']
})
export class SystemRoleFuntionsComponent implements OnInit {

  displayedColumns = ['name', 'functions'];
  roles = ROLE_SECTION_ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  onSaveClick(e: SectionElement) {

  }

}
