import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FunctionElement } from '../model';

@Component({
  selector: 'app-dialog-function',
  templateUrl: './dialog-function.component.html',
  styleUrls: ['./dialog-function.component.scss']
})
export class DialogFunctionComponent implements OnInit {

  title: string = '';
  form: FormGroup;

  constructor(private dialogRef: MatDialogRef<DialogFunctionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FunctionElement,) {
    this.title = data?.name ? '修改' : '添加';
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern(/^[\u4E00-\u9FA5A-Za-z0-9_]{2,16}$/)]),
      code: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z0-9_]{2,16}$/)]),
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
    this.dialogRef.close({ op: 'save', e: this.data });
  }

  onCloseClick(): void {
    this.dialogRef.close({ op: 'close' });
  }

}
