import { Component, OnInit } from '@angular/core';

export interface LogElement {
  name: string;
  app: string;
  operate: string;
  createdAt: Date;
}

const ELEMENT_DATA: LogElement[] = [
  { name: 'zhangsan', operate: '查询列表', app: '文件存储', createdAt: new Date() },
  { name: 'zhangsan', operate: '查询列表', app: '文件存储', createdAt: new Date() },
  { name: 'zhangsan', operate: '查询列表', app: '文件存储', createdAt: new Date() },
  { name: 'zhangsan', operate: '查询列表', app: '文件存储', createdAt: new Date() },
  { name: 'zhangsan', operate: '查询列表', app: '文件存储', createdAt: new Date() },
  { name: 'zhangsan', operate: '查询列表', app: '文件存储', createdAt: new Date() },
  { name: 'zhangsan', operate: '查询列表', app: '文件存储', createdAt: new Date() },
  { name: 'zhangsan', operate: '查询列表', app: '文件存储', createdAt: new Date() },
  { name: 'zhangsan', operate: '查询列表', app: '文件存储', createdAt: new Date() },
  { name: 'zhangsan', operate: '查询列表', app: '文件存储', createdAt: new Date() },
];


@Component({
  selector: 'app-log-activity',
  templateUrl: './log-activity.component.html',
  styleUrls: ['./log-activity.component.scss']
})
export class LogActivityComponent implements OnInit {

  displayedColumns = ['name', 'app', 'operate', 'createdAt'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
