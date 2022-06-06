import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { CtmElet } from 'src/@sun/models/customer.model';

import { MyService } from '../my.service';

@Component({
  selector: 'app-dialog-reset',
  templateUrl: './dialog-reset.component.html',
  styleUrls: ['./dialog-reset.component.scss']
})
export class DialogResetComponent implements OnInit {

  form: UntypedFormGroup;

  constructor(private notifyServ: NotifyService,
    private hostServ: MyService,
    private dialogRef: MatDialogRef<DialogResetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CtmElet,) {
    this.form = new UntypedFormGroup({
      oldPsd: new UntypedFormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,17}$/)]),
      newPsd: new UntypedFormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,17}$/)]),
      confirmPsd: new UntypedFormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,17}$/)]),
    });
  }

  ngOnInit() {
  }

  onSaveClick(): void {
    const oldPsd = this.form.controls['oldPsd'].value;
    const newPsd = this.form.controls['newPsd'].value;
    this.hostServ.reset(oldPsd, newPsd).subscribe({
      next: res => {
        if (res.success) {
          this.dialogRef.close({ op: 'save', newPsd: this.form.controls['newPsd'].value });
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
