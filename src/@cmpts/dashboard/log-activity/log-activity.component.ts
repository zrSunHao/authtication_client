import { Component, OnInit } from '@angular/core';
import { LOG_ELEMENT_DATA } from '../model';

@Component({
  selector: 'app-log-activity',
  templateUrl: './log-activity.component.html',
  styleUrls: ['./log-activity.component.scss']
})
export class LogActivityComponent implements OnInit {

  displayedColumns = ['name', 'app', 'operate', 'createdAt'];
  dataSource = LOG_ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
