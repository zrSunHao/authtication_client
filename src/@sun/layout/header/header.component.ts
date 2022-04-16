import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';


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

  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.set_menu(this.router.url);
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(e => {
        const r = e as NavigationEnd;
        this.set_menu(r.url);
      });
  }

  menu_click(type: menutype) {
    this.router.navigate([type]);
  }

  set_menu(url:string){
    if (url.indexOf(menutype.dashboard) != -1) {
      this.menuitem = menutype.dashboard;
    } else if (url.indexOf(menutype.customer) != -1) {
      this.menuitem = menutype.customer;
    } else if (url.indexOf(menutype.app) != -1) {
      this.menuitem = menutype.app;
    } else if (url.indexOf(menutype.program) != -1) {
      this.menuitem = menutype.program;
    } else if (url.indexOf(menutype.constraint) != -1) {
      this.menuitem = menutype.constraint;
    }else if(url == null){
      this.menuitem = menutype.dashboard;
    } 
  }

}
