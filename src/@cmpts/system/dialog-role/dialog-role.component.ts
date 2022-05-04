import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OptionItem } from 'src/@sun/models/paging.model';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { RoleElet, ROLE_RANK_OPS } from '../../../@sun/models/system.model';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-dialog-role',
  templateUrl: './dialog-role.component.html',
  styleUrls: ['./dialog-role.component.scss']
})
export class DialogRoleComponent implements OnInit {

  title: string = '';
  form: FormGroup;
  update: boolean = false;
  rankOps: OptionItem[] = ROLE_RANK_OPS;

  constructor(private dialogRef: MatDialogRef<DialogRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RoleElet,
    private notifyServ: NotifyService,
    private hostServ: SystemService,) {
    this.title = data?.name ? '修改' : '添加';
    this.update = (data?.id !== '' && data?.id !== null && data?.id !== undefined);
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
    if (this.update) this._update(this.data);
    else this._add(this.data);
  }

  onCloseClick(): void {
    this.dialogRef.close({ op: 'close' });
  }

  private _add(e: RoleElet): void {
    this.hostServ.addRole(e).subscribe({
      next: res => {
        if (res.success) {
          this.dialogRef.close({ op: 'save', e: e });
        } else {
          const msg = `角色【${e.name}】信息保存失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `角色【${e.name}】信息保存失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _update(e: RoleElet): void {
    this.hostServ.addRole(e).subscribe({
      next: res => {
        if (res.success) {
          this.dialogRef.close({ op: 'save', e: e });
        } else {
          const msg = `角色【${e.name}】信息更新失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `角色【${e.name}】信息更新失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

}
