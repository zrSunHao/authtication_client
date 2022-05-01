import { Component, Input, OnInit } from '@angular/core';
import { LogElement, LOG_ELEMENT_DATA } from '../model';

@Component({
  selector: 'app-log-activity',
  templateUrl: './log-activity.component.html',
  styleUrls: ['./log-activity.component.scss']
})
export class LogActivityComponent implements OnInit {

  displayedColumns = ['name', 'app', 'operate', 'createdAt'];
  @Input() dataSource: LogElement[] = [];

  constructor() { }

  ngOnInit() {
  }

}
