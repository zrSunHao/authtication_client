import { Component, Input, OnInit } from '@angular/core';
import { CustomerElement } from '../model';

@Component({
  selector: 'app-customer-activity',
  templateUrl: './customer-activity.component.html',
  styleUrls: ['./customer-activity.component.scss']
})
export class CustomerActivityComponent implements OnInit {

  displayedColumns = ['avatar', 'name', 'app', 'createdAt'];
  @Input() dataSource:CustomerElement[] = [];

  constructor() { }

  ngOnInit() {
  }

}
