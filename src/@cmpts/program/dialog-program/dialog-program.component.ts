import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OptionItem } from 'src/@sun/models/paging.model';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { PgmElet, PGM_TYPE_OPS } from '../../../@sun/models/program.model';
import { ProgramService } from '../program.service';

@Component({
  selector: 'app-dialog-program',
  templateUrl: './dialog-program.component.html',
  styleUrls: ['./dialog-program.component.scss']
})
export class DialogProgramComponent implements OnInit {

  title: string = '';
  form: FormGroup;
  update: boolean = false;
  typeOps: OptionItem[] = PGM_TYPE_OPS;

  constructor(private dialogRef: MatDialogRef<DialogProgramComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PgmElet,
    private hostServ: ProgramService,
    private notifyServ: NotifyService,) {
    this.title = data?.name ? '修改' : '添加';
    this.update = (data?.id !== '' && data?.id !== null && data?.id !== undefined);
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern(/^[\u4E00-\u9FA5A-Za-z0-9_]{2,16}$/)]),
      category: new FormControl(null, [Validators.required]),
      code: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z0-9_]{2,16}$/)]),
      intro: new FormControl(null, [Validators.required, Validators.maxLength(256)]),
      remark: new FormControl(null, [Validators.required, Validators.maxLength(256)]),
    });
  }

  ngOnInit() {
    this.form.controls['name'].setValue(this.data.name);
    this.form.controls['category'].setValue(this.data.category);
    this.form.controls['code'].setValue(this.data.code);
    this.form.controls['intro'].setValue(this.data.intro);
    this.form.controls['remark'].setValue(this.data.remark);
  }

  onSaveClick(): void {
    this.data.name = this.form.controls['name'].value;
    this.data.category = this.form.controls['category'].value;
    this.data.code = this.form.controls['code'].value;
    this.data.intro = this.form.controls['intro'].value;
    this.data.remark = this.form.controls['remark'].value;
    if (this.update) this._update(this.data);
    else this._add(this.data);
  }

  onCloseClick(): void {
    this.dialogRef.close({ op: 'close' });
  }

  private _add(e: PgmElet): void {
    this.hostServ.add(e).subscribe({
      next: res => {
        if (res.success) {

          this.dialogRef.close({ op: 'save', e: e });
        } else {
          const msg = `程序【${e.name}】信息保存失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `程序【${e.name}】信息保存失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _update(e: PgmElet): void {
    this.hostServ.update(e).subscribe({
      next: res => {
        if (res.success) {
          this.dialogRef.close({ op: 'save', e: e });
        } else {
          const msg = `程序【${e.name}】信息更新失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `程序【${e.name}】信息更新失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

}
