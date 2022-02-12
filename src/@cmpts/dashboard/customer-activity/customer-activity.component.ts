import { Component, OnInit } from '@angular/core';
import { CUSTOMER_ELEMENT_DATA } from '../model';

@Component({
  selector: 'app-customer-activity',
  templateUrl: './customer-activity.component.html',
  styleUrls: ['./customer-activity.component.scss']
})
export class CustomerActivityComponent implements OnInit {

  displayedColumns = ['avatar', 'name', 'app', 'createdAt'];
  dataSource = CUSTOMER_ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
