import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Paginator, PaginatorColumn } from 'src/@sun/shared/cmpts/paginator/paginator.component';
import { DialogCustomerComponent } from '../dialog-customer/dialog-customer.component';
import { CustomerElement, CUSTOMER_ELEMENT_DATA } from '../model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  total = 35;
  columnOp = 'lastLoginAt';
  columns: Array<PaginatorColumn> = [
    { name: '账号', value: 'name' },
    { name: '昵称', value: 'nickname' },
    { name: '约束', value: 'constraint' },
    { name: '最近登陆时间', value: 'lastLoginAt' },
    { name: '注册时间', value: 'createdAt' },
  ];

  form: FormGroup;
  displayedColumns = ['avatar', 'name', 'nickname', 'constraint', 'lastLoginAt', 'remark', 'operate',];
  dataSource = CUSTOMER_ELEMENT_DATA;

  constructor(private dialog: MatDialog, private router: Router) {
    this.form = new FormGroup({
      userName: new FormControl(null, []),
      nickname: new FormControl(null, []),
      contraint: new FormControl(null, []),
      remark: new FormControl(null, [])
    });
  }

  ngOnInit() {
  }

  paginatorChange(paginator: Paginator) {
    console.log(paginator);
  }

  detail_click(e: CustomerElement): void {
    this.router.navigate([`/customer/detail/${e.name}`]);
  }

  remark_click(e: CustomerElement): void {
    const dialogRef = this.dialog.open(DialogCustomerComponent, {
      width: '360px',
      data: e,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.op === 'save') {
        e.remark = result.remark;
      }
    });
  }
}
