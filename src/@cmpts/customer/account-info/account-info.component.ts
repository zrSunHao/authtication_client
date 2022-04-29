import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCustomerComponent } from '../dialog-customer/dialog-customer.component';
import { DialogResetComponent } from '../dialog-reset/dialog-reset.component';
import { CustomerElement } from '../model';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {

  @Input() customerId: string = '';
  customer: CustomerElement = {
    id: '1', avatar: '/assets/images/people_1.jpg', name: 'zhangsan', nickname: '张三',
    limited: '1', lastLoginAt: new Date(), createdAt: new Date(), remark: '这是假数据'
  };

  constructor(private dialog: MatDialog,) { }

  ngOnInit() {
  }

  onResetClick(): void {
    const dialogRef = this.dialog.open(DialogResetComponent, {
      width: '360px',
      data: this.customer,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.op === 'save') {
        const newPasd: string = result.newPasd;
      }
    });
  }

  onRemarkClick(): void {
    const dialogRef = this.dialog.open(DialogCustomerComponent, {
      width: '360px',
      data: this.customer,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.op === 'save') {
        this.customer.remark = result.remark;
      }
    });
  }
}
