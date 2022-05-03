import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { FunctionElement } from '../model';
import { ProgramService } from '../program.service';

@Component({
  selector: 'app-dialog-function',
  templateUrl: './dialog-function.component.html',
  styleUrls: ['./dialog-function.component.scss']
})
export class DialogFunctionComponent implements OnInit {

  title: string = '';
  form: FormGroup;
  update: boolean = false;

  constructor(private dialogRef: MatDialogRef<DialogFunctionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FunctionElement,
    private notifyServ: NotifyService,
    private hostServ: ProgramService,) {
    this.title = data?.name ? '修改' : '添加';
    this.update = (data?.id !== '' && data?.id !== null && data?.id !== undefined);
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern(/^[\u4E00-\u9FA5A-Za-z0-9_]{2,16}$/)]),
      code: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z0-9/_]{2,16}$/)]),
      constraint: new FormControl(null, []),
      limitedExpireAt: new FormControl(null, []),
      remark: new FormControl(null, [Validators.maxLength(256)]),
    });
  }

  ngOnInit() {
    this.form.controls['name'].setValue(this.data.name);
    this.form.controls['code'].setValue(this.data.code);
    this.form.controls['constraint'].setValue(this.data.constraint);
    this.form.controls['limitedExpireAt'].setValue(this.data.limitedExpireAt);
    this.form.controls['remark'].setValue(this.data.remark);
  }

  onSaveClick(): void {
    this.data.name = this.form.controls['name'].value;
    this.data.code = this.form.controls['code'].value;
    this.data.constraint = this.form.controls['constraint'].value;
    this.data.limitedExpireAt = this.form.controls['limitedExpireAt'].value;
    this.data.remark = this.form.controls['remark'].value;
    if (this.update) this._update(this.data);
    else this._add(this.data);
  }

  onCloseClick(): void {
    this.dialogRef.close({ op: 'close' });
  }

  private _add(e: FunctionElement): void {
    this.hostServ.addFunction(e).subscribe({
      next: res => {
        if (res.success) {
          this.dialogRef.close({ op: 'save', e: e });
        } else {
          const msg = `功能【${e.name}】信息保存失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `功能【${e.name}】信息保存失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _update(e: FunctionElement): void {
    this.hostServ.updateFunction(e).subscribe({
      next: res => {
        if (res.success) {
          this.dialogRef.close({ op: 'save', e: e });
        } else {
          const msg = `功能【${e.name}】信息保存失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `功能【${e.name}】信息保存失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

}
