import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CtmRoleUpdateDto } from 'src/@sun/models/customer.model';
import { OptionItem } from 'src/@sun/models/paging.model';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-dialog-customer-role',
  templateUrl: './dialog-customer-role.component.html',
  styleUrls: ['./dialog-customer-role.component.scss']
})
export class DialogCustomerRoleComponent implements OnInit {

  title: string = '';
  form: UntypedFormGroup;
  sysOptions: OptionItem[] = [];
  roleOptions: OptionItem[] = [];

  constructor(private notifyServ: NotifyService,
    private hostServ: SystemService,
    private dialogRef: MatDialogRef<DialogCustomerRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CtmRoleUpdateDto,) {
    this.title = '修改角色';
    this.form = new UntypedFormGroup({
      sysId: new UntypedFormControl(null, [Validators.required,]),
      roleId: new UntypedFormControl(null, [Validators.required,]),
    });
  }

  ngOnInit() {
    this.form.controls['sysId'].setValue(this.data.sysId);
    this.form.controls['roleId'].setValue(this.data.roleId);
    this.form.controls['sysId'].disable();
    this._loadSysItems();
    if (this.data?.sysId) this._loadRoleItems(this.data.sysId);
  }

  onSaveClick(): void {
    this._update();
  }

  onCloseClick(): void {
    this.dialogRef.close({ op: 'close' });
  }

  private _update(): void {
    this.data.sysId = this.form.controls['sysId'].value;
    this.data.roleId = this.form.controls['roleId'].value;
    this.hostServ.updateCtmRole(this.data).subscribe({
      next: res => {
        if (res.success) {
          this.dialogRef.close({ op: 'save', data: this.data });
        } else {
          const msg = `角色更新失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `角色更新失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _loadSysItems(): void {
    this.hostServ.getSystemItems().subscribe({
      next: res => {
        if (res.success) {
          this.sysOptions = res.data as OptionItem[];
        } else {
          const msg = `系统选项信息加载失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `系统选项信息加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _loadRoleItems(sysId: string): void {
    this.hostServ.getRoleItems(sysId).subscribe({
      next: res => {
        if (res.success) {
          this.roleOptions = res.data as OptionItem[];
        } else {
          const msg = `角色选项信息加载失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `角色选项信息加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }
}
