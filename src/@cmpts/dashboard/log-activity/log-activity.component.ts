import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReportLogElet, LOG_ELEMENT_DATA } from '../../../@sun/models/report.model';

@Component({
  selector: 'app-log-activity',
  templateUrl: './log-activity.component.html',
  styleUrls: ['./log-activity.component.scss']
})
export class LogActivityComponent implements OnInit {

  displayedColumns = ['name', 'sysName', 'operate', 'createdAt'];
  @Input() dataSource: ReportLogElet[] = [];
  @Output() onRefesh: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onRefeshClick() {
    this.onRefesh.emit();
  }

}
