import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { CustomerService } from '../customer.service';
import { CtmElet } from 'src/@sun/models/customer.model';

@Component({
  selector: 'app-dialog-customer',
  templateUrl: './dialog-customer.component.html',
  styleUrls: ['./dialog-customer.component.scss']
})
export class DialogCustomerComponent implements OnInit {

  remark: string = '';

  constructor(private notifyServ: NotifyService,
    private hostServ: CustomerService,
    private dialogRef: MatDialogRef<DialogCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CtmElet,) {
    this.remark = this.data.remark;
  }

  ngOnInit() {

  }

  onSaveClick(): void {
    this.hostServ.remark(this.data.id as string, this.remark).subscribe({
      next: res => {
        if (res.success) {
          this.dialogRef.close({ op: 'save', remark: this.remark });
        } else {
          const msg = `备注失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `备注失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  onCloseClick(): void {
    this.dialogRef.close({ op: 'close' });
  }

}
