import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConstraintElement, } from '../model';

@Component({
  selector: 'app-constraint-activity',
  templateUrl: './constraint-activity.component.html',
  styleUrls: ['./constraint-activity.component.scss']
})
export class ConstraintActivityComponent implements OnInit {

  displayedColumns = ['id', 'category', 'method', 'userName', 'sysName', 'functionName', 'expiredAt', 'origin', 'createdAt', 'remark',];
  @Input() dataSource: ConstraintElement[] = [];
  @Output() onRefesh: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onRefeshClick() {
    this.onRefesh.emit();
  }

}
