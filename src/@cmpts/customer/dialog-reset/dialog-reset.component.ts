import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { CustomerService } from '../customer.service';
import { CustomerElement } from '../model';

@Component({
  selector: 'app-dialog-reset',
  templateUrl: './dialog-reset.component.html',
  styleUrls: ['./dialog-reset.component.scss']
})
export class DialogResetComponent implements OnInit {

  form: FormGroup;

  constructor(private notifyServ: NotifyService,
    private hostServ: CustomerService,
    private dialogRef: MatDialogRef<DialogResetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomerElement,) {
    this.form = new FormGroup({
      password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,17}$/)]),
      confirmPsd: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,17}$/)]),
    });
  }

  ngOnInit() {
  }

  onSaveClick(): void {
    const newPsd = this.form.controls['password'].value;
    this.hostServ.reset(this.data.id as string, newPsd).subscribe({
      next: res => {
        if (res.success) {
          this.dialogRef.close({ op: 'save', newPsd: this.form.controls['password'].value });
        } else {
          const msg = `重置密码失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `重置密码失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  onCloseClick(): void {
    this.dialogRef.close({ op: 'close' });
  }

}
