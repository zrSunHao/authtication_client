import { Component, Input, OnInit } from '@angular/core';
import { ConstraintElement, } from '../model';

@Component({
  selector: 'app-constraint-activity',
  templateUrl: './constraint-activity.component.html',
  styleUrls: ['./constraint-activity.component.scss']
})
export class ConstraintActivityComponent implements OnInit {

  displayedColumns = ['type', 'method', 'name', 'origin', 'expireAt', 'createdAt', 'remark'];
  @Input() dataSource: ConstraintElement[] = [];

  constructor() { }

  ngOnInit() {
  }

}
