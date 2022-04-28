import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoleElement } from '../model';

@Component({
  selector: 'app-dialog-role',
  templateUrl: './dialog-role.component.html',
  styleUrls: ['./dialog-role.component.scss']
})
export class DialogRoleComponent implements OnInit {

  title: string = '';
  form: FormGroup;

  constructor(private dialogRef: MatDialogRef<DialogRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RoleElement,) {
    this.title = data?.name ? '修改' : '添加';
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern(/^[\u4E00-\u9FA5A-Za-z0-9_]{2,16}$/)]),
      code: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z0-9_]{2,16}$/)]),
      rank: new FormControl(null, [Validators.required,]),
      limitedMethod: new FormControl(null, []),
      limitedExpiredAt: new FormControl(null, []),
      remark: new FormControl(null, [Validators.maxLength(256)]),
    });
  }

  ngOnInit() {
    this.form.controls['name'].setValue(this.data.name);
    this.form.controls['code'].setValue(this.data.code);
    this.form.controls['rank'].setValue(this.data.rank);
    this.form.controls['limitedMethod'].setValue(this.data.limitedMethod);
    this.form.controls['limitedExpiredAt'].setValue(this.data.limitedExpiredAt);
    this.form.controls['remark'].setValue(this.data.remark);
  }

  onSaveClick(): void {
    this.data.name = this.form.controls['name'].value;
    this.data.code = this.form.controls['code'].value;
    this.data.rank = this.form.controls['rank'].value;
    this.data.limitedMethod = this.form.controls['limitedMethod'].value;
    this.data.limitedExpiredAt = this.form.controls['limitedExpiredAt'].value;
    this.data.remark = this.form.controls['remark'].value;
    this.dialogRef.close({ op: 'save', e: this.data });
  }

  onCloseClick(): void {
    this.dialogRef.close({ op: 'close' });
  }

}
