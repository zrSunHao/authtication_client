import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProgramElement } from '../model';

@Component({
  selector: 'app-dialog-program',
  templateUrl: './dialog-program.component.html',
  styleUrls: ['./dialog-program.component.scss']
})
export class DialogProgramComponent implements OnInit {

  title: string = '';
  form: FormGroup;

  constructor(private dialogRef: MatDialogRef<DialogProgramComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProgramElement,) {
    this.title = data?.name ? '修改' : '添加';
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern(/^[\u4E00-\u9FA5A-Za-z0-9_]{2,16}$/)]),
      type: new FormControl(null, [Validators.required]),
      code: new FormControl(null, [Validators.required, Validators.pattern(/^[\u4E00-\u9FA5A-Za-z0-9_]{2,16}$/)]),
      intro: new FormControl(null, [Validators.required, Validators.maxLength(256)]),
      remark: new FormControl(null, [Validators.maxLength(256)]),
    });
  }

  ngOnInit() {
    this.form.controls['name'].setValue(this.data.name);
    this.form.controls['type'].setValue(this.data.type);
    this.form.controls['code'].setValue(this.data.code);
    this.form.controls['intro'].setValue(this.data.intro);
    this.form.controls['remark'].setValue(this.data.remark);
  }

  onSaveClick(): void {
    this.data.name = this.form.controls['name'].value;
    this.data.type = this.form.controls['type'].value;
    this.data.code = this.form.controls['code'].value;
    this.data.intro = this.form.controls['intro'].value;
    this.data.remark = this.form.controls['remark'].value;
    this.dialogRef.close({ op: 'save', e: this.data });
  }

  onCloseClick(): void {
    this.dialogRef.close({ op: 'close' });
  }

}
