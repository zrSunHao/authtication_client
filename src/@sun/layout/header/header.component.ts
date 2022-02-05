import { Component, OnInit } from '@angular/core';

export enum menutype {
  dashboard = 'dashboard',
  customer = 'customer',
  app = 'app',
  program = 'program',
  constraint = 'constraint',
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuitemtype = menutype;
  menuitem: menutype = menutype.dashboard;

  constructor() { }

  ngOnInit() {
  }

  menu_click(type: menutype) {
    this.menuitem = type;
  }

}
