import { Component, OnInit } from '@angular/core';

export interface CustomerElement {
  avatar: string;
  name: string;
  app: string;
  createdAt: Date;
}

const ELEMENT_DATA: CustomerElement[] = [
  { avatar: '/assets/images/people_1.jpg', name: 'zhangsan', app: '文件存储', createdAt: new Date() },
  { avatar: '/assets/images/logo_256.png', name: 'lisi', app: '档案存储', createdAt: new Date() },
  { avatar: '/assets/images/people_1.jpg', name: 'zhangsan', app: '音乐中心', createdAt: new Date() },
  { avatar: '/assets/icons/customer.png', name: 'zhangsan', app: '博客', createdAt: new Date() },
  { avatar: '/assets/images/people_1.jpg', name: 'wangwu', app: '仓储中心档案存储', createdAt: new Date() },
  { avatar: '/assets/images/logo_256.png', name: 'zhangsan', app: '仓仓储中心储中心', createdAt: new Date() },
  { avatar: '/assets/images/people_1.jpg', name: 'haha', app: '仓储中心', createdAt: new Date() },
  { avatar: '/assets/images/logo_256.png', name: 'dede', app: '仓储中心', createdAt: new Date() },
  { avatar: '/assets/icons/customer.png', name: 'lucas', app: '仓储中心', createdAt: new Date() },
  { avatar: '/assets/images/people_1.jpg', name: 'zhangsan', app: '仓储中心', createdAt: new Date() },
];

@Component({
  selector: 'app-customer-activity',
  templateUrl: './customer-activity.component.html',
  styleUrls: ['./customer-activity.component.scss']
})
export class CustomerActivityComponent implements OnInit {

  displayedColumns = ['avatar', 'name', 'app', 'createdAt'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
