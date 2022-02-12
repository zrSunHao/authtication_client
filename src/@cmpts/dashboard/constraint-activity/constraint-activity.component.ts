import { Component, OnInit } from '@angular/core';
import { CONSTRAINT_ELEMENT_DATA } from '../model';

@Component({
  selector: 'app-constraint-activity',
  templateUrl: './constraint-activity.component.html',
  styleUrls: ['./constraint-activity.component.scss']
})
export class ConstraintActivityComponent implements OnInit {

  displayedColumns = ['type', 'method', 'name', 'origin', 'expireAt', 'createdAt', 'remark'];
  dataSource = CONSTRAINT_ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
