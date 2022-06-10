import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from 'src/@sun/shared/services/auth.service';

export enum menutype {
  dashboard = 'dashboard',
  customer = 'customer',
  system = 'system',
  program = 'program',
  constraint = 'constraint',
  other = ''
}

export class SectionElement {
  name: string = '';
  icon: string = '';
  type: menutype = menutype.other;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName: string = '';
  avatar: string = '';

  menuitemtype = menutype;
  menuitem: menutype = menutype.dashboard;
  sections: SectionElement[] = [];
  allSections: SectionElement[] = [
    { name: '起始页', icon: 'dashboard', type: menutype.dashboard },
    { name: '客户管理', icon: 'group', type: menutype.customer },
    { name: '程序管理', icon: 'miscellaneous_services', type: menutype.program },
    { name: '系统管理', icon: 'gamepad', type: menutype.system },
    { name: '约束管理', icon: 'security', type: menutype.constraint },
  ];

  constructor(private router: Router,
    private hostServ: AuthService,) { }

  ngOnInit() {
    this.userName = this.hostServ.getCustomer().name;
    this.avatar = this.hostServ.getCustomer().avatar;
    const codes = this.hostServ.getSections();
    this.allSections.forEach(x => {
      const flag = codes.findIndex(y => y === x.type) >= 0;
      if (flag) this.sections.push(x);
    })
    this.set_menu(this.router.url);
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(e => {
        this.set_menu(this.router.url);
      });
  }

  menu_click(type: menutype) {
    this.router.navigate([type]);
  }

  set_menu(url: string) {
    if (url.indexOf(`/${menutype.dashboard}`) == 0) {
      this.menuitem = menutype.dashboard;
    } else if (url.indexOf(`/${menutype.customer}`) == 0) {
      this.menuitem = menutype.customer;
    } else if (url.indexOf(`/${menutype.system}`) == 0) {
      this.menuitem = menutype.system;
    } else if (url.indexOf(`/${menutype.program}`) == 0) {
      this.menuitem = menutype.program;
    } else if (url.indexOf(`/${menutype.constraint}`) == 0) {
      this.menuitem = menutype.constraint;
    } else {
      this.menuitem = menutype.other;
    }
  }

  onMyClick(): void {
    this.router.navigate(['/my']);
  }

  onLogoutClick(): void {
    this.hostServ.logout().subscribe({
      next: res => {
        this.hostServ.clear();
        this.router.navigate(['/security/login']);
      },
      error: err => {
        this.hostServ.clear();
        this.router.navigate(['/security/login']);
      }
    })
  }

}
