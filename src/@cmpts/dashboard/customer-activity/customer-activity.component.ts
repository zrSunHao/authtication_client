import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReportCtmElet } from 'src/@sun/models/report.model';

@Component({
  selector: 'app-customer-activity',
  templateUrl: './customer-activity.component.html',
  styleUrls: ['./customer-activity.component.scss']
})
export class CustomerActivityComponent implements OnInit {

  displayedColumns = ['avatar', 'name', 'sysName', 'lastLoginAt'];
  @Input() dataSource: ReportCtmElet[] = [];
  @Output() onRefesh: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onRefeshClick() {
    this.onRefesh.emit();
  }

}
