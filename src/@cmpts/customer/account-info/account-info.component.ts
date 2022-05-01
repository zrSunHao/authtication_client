import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { CustomerService } from '../customer.service';
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
    id: '', avatar: '', name: '', nickname: '',
    limited: '1', lastLoginAt: new Date(), createdAt: new Date(), remark: '这是假数据'
  };

  @ViewChild("imageInput", { static: false })
  imageInput!: ElementRef;

  constructor(private dialog: MatDialog, private notifyServ: NotifyService,
    private hostServ: CustomerService,) { }

  ngOnInit() {
    this._loadData();
  }

  onResetClick(): void {
    const dialogRef = this.dialog.open(DialogResetComponent,
      { width: '360px', data: this.customer, }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save') {
        const newPsd: string = result?.newPsd;
        this.notifyServ.notify(`重置密码成功！！！`, 'success');
      }
    });
  }

  onRemarkClick(): void {
    const dialogRef = this.dialog.open(DialogCustomerComponent, {
      width: '360px',
      data: this.customer,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.op === 'save') {
        this.customer.remark = result.remark;
        this.notifyServ.notify(`备注成功！！！`, 'success');
      }
    });
  }

  onAvatarClick(): void {
    this.imageInput.nativeElement.click();
  }

  onFileChange(e: any): void {
    if (e?.target?.files?.length > 0 && this.customer) {
      const formData = new FormData();
      formData.append('id', this.customer.id as string);
      formData.append('avatar', e.target.files[0]);
      this.hostServ.icon(formData).subscribe({
        next: res => {
          if (res.success) {
            if (this.customer) this.customer.avatar = res.data as string;
          } else {
            const msg = `程序${this.customer?.name}的头像上传失败！！！ ${res.allMessages}`;
            this.notifyServ.notify(msg, 'error');
          }
        },
        error: err => {
          const msg = `程序${this.customer?.name}的头像上传失败！！！ ${err}`;
          this.notifyServ.notify(msg, 'error');
        }
      });
    }
  }

  private _loadData() {
    this.hostServ.getById(this.customerId).subscribe({
      next: res => {
        if (res.success) {
          this.customer = res.data as CustomerElement;
        } else {
          const msg = `账号信息加载失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `账号信息加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
        this.customer = {
          id: '1', avatar: '/assets/images/people_1.jpg', name: 'zhangsan', nickname: '张三',
          limited: '1', lastLoginAt: new Date(), createdAt: new Date(), remark: '这是假数据'
        };
      }
    });
  }

}
