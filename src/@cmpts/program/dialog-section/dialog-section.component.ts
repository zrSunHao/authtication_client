import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { SectElet } from '../../../@sun/models/program.model';
import { ProgramService } from '../program.service';

@Component({
  selector: 'app-dialog-section',
  templateUrl: './dialog-section.component.html',
  styleUrls: ['./dialog-section.component.scss']
})
export class DialogSectionComponent implements OnInit {

  title: string = '';
  form: FormGroup;
  update: boolean = false;

  constructor(private dialogRef: MatDialogRef<DialogSectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SectElet,
    private notifyServ: NotifyService,
    private hostServ: ProgramService,) {
    this.title = data?.name ? '修改' : '添加';
    this.update = (data?.id !== '' && data?.id !== null && data?.id !== undefined);
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern(/^[\u4E00-\u9FA5A-Za-z0-9_]{2,16}$/)]),
      code: new FormControl(null, [Validators.required, Validators.pattern(/^[\u4E00-\u9FA5A-Za-z0-9/_]{2,16}$/)]),
      remark: new FormControl(null, [Validators.required, Validators.maxLength(256)]),
    });
  }

  ngOnInit() {
    this.form.controls['name'].setValue(this.data.name);
    this.form.controls['code'].setValue(this.data.code);
    this.form.controls['remark'].setValue(this.data.remark);
  }

  onSaveClick(): void {
    this.data.name = this.form.controls['name'].value;
    this.data.code = this.form.controls['code'].value;
    this.data.remark = this.form.controls['remark'].value;
    if (this.update) this._update(this.data);
    else this._add(this.data);
  }

  onCloseClick(): void {
    this.dialogRef.close({ op: 'close' });
  }

  private _add(e: SectElet): void {
    this.hostServ.addSection(e).subscribe({
      next: res => {
        if (res.success) {
          this.dialogRef.close({ op: 'save', e: e });
        } else {
          const msg = `模块【${e.name}】信息保存失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `模块【${e.name}】信息保存失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _update(e: SectElet): void {
    this.hostServ.updateSection(e).subscribe({
      next: res => {
        if (res.success) {
          this.dialogRef.close({ op: 'save', e: e });
        } else {
          const msg = `模块【${e.name}】信息保存失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `模块【${e.name}】信息保存失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

}
