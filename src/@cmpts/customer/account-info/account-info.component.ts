import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCustomerComponent } from '../dialog-customer/dialog-customer.component';
import { CustomerElement } from '../model';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {

  userName: string = '账号';
  nickName: string = '昵称';
  registedAt: Date = new Date();
  loginedAt: Date = new Date();
  remark: string = '这是备注';
  avatar: string = '/assets/images/logo_256.png';

  customer: CustomerElement = {
    avatar: '/assets/images/people_1.jpg', name: 'zhangsan', nickname: '张三',
    constraint: '有', lastLoginAt: new Date(), remark: '这是假数据'
  };

  constructor(private dialog: MatDialog,) { }

  ngOnInit() {
  }

  remark_click(): void {
    const dialogRef = this.dialog.open(DialogCustomerComponent, {
      width: '360px',
      data: this.customer,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.op === 'save') {
        this.customer.remark = result.remark;
        this.remark = result.remark;
      }
    });
  }
}
