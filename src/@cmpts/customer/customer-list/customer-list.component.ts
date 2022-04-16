import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CUSTOMER_ELEMENT_DATA } from '../model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  form: FormGroup;
  displayedColumns = ['avatar', 'name', 'nickname', 'constraint', 'constraintEndAt', 'lastLoginAt', 'remark','operate',];
  dataSource = CUSTOMER_ELEMENT_DATA;

  constructor() {
    this.form = new FormGroup({
      userName: new FormControl(null, []),
      nickname: new FormControl(null, []),
      contraint: new FormControl(null, []),
      remark: new FormControl(null, [])
    });
  }

  ngOnInit() {
  }

}
