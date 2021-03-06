import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OptionItem } from 'src/@sun/models/paging.model';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { CustomerService } from '../customer.service';
import { CtmRoleUpdateDto } from 'src/@sun/models/customer.model';
import { AuthService } from 'src/@sun/shared/services/auth.service';

@Component({
  selector: 'app-dialog-role',
  templateUrl: './dialog-role.component.html',
  styleUrls: ['./dialog-role.component.scss']
})
export class DialogRoleComponent implements OnInit {

  title: string = '';
  update: boolean = false;
  form: UntypedFormGroup;
  sysOptions: OptionItem[] = [];
  roleOptions: OptionItem[] = [];

  constructor(private notifyServ: NotifyService,
    private hostServ: CustomerService,
    private authServ:AuthService,
    private dialogRef: MatDialogRef<DialogRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CtmRoleUpdateDto,) {
    this.title = data?.sysId ? '修改' : '添加';
    this.update = (data?.sysId !== '' && data?.sysId !== null && data?.sysId !== undefined);
    this.form = new UntypedFormGroup({
      sysId: new UntypedFormControl(null, [Validators.required,]),
      roleId: new UntypedFormControl(null, [Validators.required,]),
    });
  }

  ngOnInit() {
    this.form.controls['sysId'].setValue(this.data.sysId);
    this.form.controls['roleId'].setValue(this.data.roleId);
    this._loadSysItems();
    if (this.data?.sysId) this._loadRoleItems(this.data.sysId);
  }

  onSaveClick(): void {
    if (this.update) this._update();
    else this._add();
  }

  onCloseClick(): void {
    this.dialogRef.close({ op: 'close' });
  }

  onSystemChange($event: any): void {
    if ($event) this._loadRoleItems($event);
  }

  private _add(): void {
    this.data.sysId = this.form.controls['sysId'].value;
    this.data.roleId = this.form.controls['roleId'].value;
    this.hostServ.addRole(this.data).subscribe({
      next: res => {
        if (res.success) {
          this.dialogRef.close({ op: 'save', data: this.data });
        } else {
          const msg = `角色添加失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `角色添加失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  private _update(): void {
    this.data.sysId = this.form.controls['sysId'].value;
    this.data.roleId = this.form.controls['roleId'].value;
    this.hostServ.updateRole(this.data).subscribe({
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
    this.authServ.getSystemItems().subscribe({
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
    this.authServ.getRoleItems(sysId).subscribe({
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
