import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CttMethod, CTT_METHOD_OPS } from 'src/@sun/models/constraint.model';
import { OptionItem } from 'src/@sun/models/paging.model';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { RoleElet, RoleRank, ROLE_RANK_OPS } from 'src/@sun/models/system.model';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-dialog-role',
  templateUrl: './dialog-role.component.html',
  styleUrls: ['./dialog-role.component.scss']
})
export class DialogRoleComponent implements OnInit {

  title: string = '';
  form: UntypedFormGroup;
  update: boolean = false;
  rankOps: OptionItem[] = ROLE_RANK_OPS.filter(x => x.key != RoleRank.other);
  methodOps: OptionItem[] = CTT_METHOD_OPS;
  CttMethod = CttMethod;

  constructor(private dialogRef: MatDialogRef<DialogRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RoleElet,
    private notifyServ: NotifyService,
    private hostServ: SystemService,) {
    this.title = data?.name ? '修改' : '添加';
    this.update = (data?.id !== '' && data?.id !== null && data?.id !== undefined);
    this.form = new UntypedFormGroup({
      name: new UntypedFormControl(null, [Validators.required, Validators.pattern(/^[\u4E00-\u9FA5A-Za-z0-9_]{2,32}$/)]),
      code: new UntypedFormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z0-9_]{2,32}$/)]),
      rank: new UntypedFormControl(null, [Validators.required,]),
      cttMethod: new UntypedFormControl(null, []),
      limitedExpiredAt: new UntypedFormControl(null, []),
      remark: new UntypedFormControl(null, [Validators.maxLength(256)]),
    });
  }

  ngOnInit() {
    this.form.controls['name'].setValue(this.data.name);
    this.form.controls['code'].setValue(this.data.code);
    this.form.controls['rank'].setValue(this.data.rank);
    this.form.controls['cttMethod'].setValue(this.data.cttMethod);
    this.form.controls['limitedExpiredAt'].setValue(this.data.limitedExpiredAt);
    this.form.controls['remark'].setValue(this.data.remark);
    this.form.controls['limitedExpiredAt'].disable();
  }

  onSaveClick(): void {
    this.data.name = this.form.controls['name'].value;
    this.data.code = this.form.controls['code'].value;
    this.data.rank = this.form.controls['rank'].value;
    this.data.cttMethod = this.form.controls['cttMethod'].value;
    this.data.limitedExpiredAt = this.form.controls['limitedExpiredAt'].value;
    this.data.remark = this.form.controls['remark'].value;
    if (this.update) this._update(this.data);
    else this._add(this.data);
  }

  onCloseClick(): void {
    this.dialogRef.close({ op: 'close' });
  }

  onCttMethodValueChange(event: number): void {
    if (event != CttMethod.lock)
      this.form.controls['limitedExpiredAt'].setValue(null);
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
    this.hostServ.updateRole(e).subscribe({
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
