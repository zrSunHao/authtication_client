import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { SysElet } from 'src/@sun/models/system.model';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-dialog-system',
  templateUrl: './dialog-system.component.html',
  styleUrls: ['./dialog-system.component.scss']
})
export class DialogSystemComponent implements OnInit {

  title: string = '';
  form: UntypedFormGroup;
  update: boolean = false;

  constructor(private dialogRef: MatDialogRef<DialogSystemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SysElet,
    private notifyServ: NotifyService,
    private hostServ: SystemService,) {
    this.title = data?.name ? '修改' : '添加';
    this.update = (data?.id !== '' && data?.id !== null && data?.id !== undefined);
    this.form = new UntypedFormGroup({
      name: new UntypedFormControl(null, [Validators.required, Validators.pattern(/^[\u4E00-\u9FA5A-Za-z0-9_]{2,32}$/)]),
      code: new UntypedFormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z0-9_]{2,32}$/)]),
      intro: new UntypedFormControl(null, [Validators.required, Validators.maxLength(256)]),
      remark: new UntypedFormControl(null, [Validators.required, Validators.maxLength(256)]),
    });
  }

  ngOnInit() {
    this.form.controls['name'].setValue(this.data.name);
    this.form.controls['code'].setValue(this.data.code);
    this.form.controls['intro'].setValue(this.data.intro);
    this.form.controls['remark'].setValue(this.data.remark);
  }

  onSaveClick(): void {
    this.data.name = this.form.controls['name'].value;
    this.data.code = this.form.controls['code'].value;
    this.data.intro = this.form.controls['intro'].value;
    this.data.remark = this.form.controls['remark'].value;
    if (this.update) this._update(this.data);
    else this._add(this.data);
  }

  onCloseClick(): void {
    this.dialogRef.close({ op: 'close' });
  }

  private _add(e: SysElet): void {
    this.hostServ.add(e).subscribe({
      next: res => {
        if (res.success) {
          this.dialogRef.close({ op: 'save', e: e });
        } else {
          const msg = `系统【${e.name}】信息保存失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `系统【${e.name}】信息保存失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _update(e: SysElet): void {
    this.hostServ.update(e).subscribe({
      next: res => {
        if (res.success) {
          this.dialogRef.close({ op: 'save', e: e });
        } else {
          const msg = `系统【${e.name}】信息更新失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `系统【${e.name}】信息更新失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }
}
