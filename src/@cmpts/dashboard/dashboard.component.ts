import { Component, OnInit } from '@angular/core';
import { Widget } from './model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  widgets: Array<Widget> = [
    { title: '126名客户', icon: 'group', color: 'primary' },
    { title: '17个应用', icon: 'gamepad', color: 'accent' },
    { title: '99个程序（20|79）', icon: 'miscellaneous_services', color: 'accent' },
    { title: '11111个有效约束', icon: 'security', color: 'warn' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
