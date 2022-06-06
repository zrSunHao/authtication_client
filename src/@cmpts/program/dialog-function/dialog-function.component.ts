import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CttMethod, CTT_METHOD_OPS } from 'src/@sun/models/constraint.model';
import { OptionItem } from 'src/@sun/models/paging.model';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { FunctElet } from 'src/@sun/models/program.model';
import { ProgramService } from '../program.service';

@Component({
  selector: 'app-dialog-function',
  templateUrl: './dialog-function.component.html',
  styleUrls: ['./dialog-function.component.scss']
})
export class DialogFunctionComponent implements OnInit {

  title: string = '';
  form: UntypedFormGroup;
  update: boolean = false;
  methodOps: OptionItem[] = CTT_METHOD_OPS;
  CttMethod = CttMethod;

  constructor(private dialogRef: MatDialogRef<DialogFunctionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FunctElet,
    private notifyServ: NotifyService,
    private hostServ: ProgramService,) {
    this.title = data?.name ? '修改' : '添加';
    this.update = (data?.id !== '' && data?.id !== null && data?.id !== undefined);
    this.form = new UntypedFormGroup({
      name: new UntypedFormControl(null, [Validators.required, Validators.pattern(/^[\u4E00-\u9FA5A-Za-z0-9_]{2,32}$/)]),
      code: new UntypedFormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z0-9/_]{2,32}$/)]),
      cttMethod: new UntypedFormControl(null, []),
      limitedExpiredAt: new UntypedFormControl(null, []),
      remark: new UntypedFormControl(null, [Validators.maxLength(256)]),
    });
  }

  ngOnInit() {
    this.form.controls['name'].setValue(this.data.name);
    this.form.controls['code'].setValue(this.data.code);
    this.form.controls['cttMethod'].setValue(this.data.cttMethod);
    this.form.controls['limitedExpiredAt'].setValue(this.data.limitedExpiredAt);
    this.form.controls['remark'].setValue(this.data.remark);
    this.form.controls['limitedExpiredAt'].disable();
  }

  onSaveClick(): void {
    this.data.name = this.form.controls['name'].value;
    this.data.code = this.form.controls['code'].value;
    this.data.cttMethod = this.form.controls['cttMethod'].value;
    this.data.limitedExpiredAt = this.form.controls['limitedExpiredAt'].value;
    this.data.remark = this.form.controls['remark'].value;
    if (this.update) this._update(this.data);
    else this._add(this.data);
  }

  onCttMethodValueChange(event: number): void {
    if (event != CttMethod.lock)
      this.form.controls['limitedExpiredAt'].setValue(null);
  }

  onCloseClick(): void {
    this.dialogRef.close({ op: 'close' });
  }

  private _add(e: FunctElet): void {
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

  private _update(e: FunctElet): void {
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
