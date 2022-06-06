import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OptionItem } from 'src/@sun/models/paging.model';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { CustomerService } from '../customer.service';
import { CtmCttAddDto } from 'src/@sun/models/customer.model';
import { CttCategory, CttMethod, CTT_CATEGERY_OPS, CTT_METHOD_OPS } from 'src/@sun/models/constraint.model';

@Component({
  selector: 'app-dialog-constraint',
  templateUrl: './dialog-constraint.component.html',
  styleUrls: ['./dialog-constraint.component.scss']
})
export class DialogConstraintComponent implements OnInit {

  title: string = '添加约束';
  expiredAtEnabled = false;
  sysEnabled = false;
  form: UntypedFormGroup;
  sysOptions: OptionItem[] = [];
  categeryOps: OptionItem[] = [CTT_CATEGERY_OPS[0], CTT_CATEGERY_OPS[1], CTT_CATEGERY_OPS[2]];
  methodOps: OptionItem[] = CTT_METHOD_OPS;

  constructor(private notifyServ: NotifyService,
    private hostServ: CustomerService,
    private dialogRef: MatDialogRef<DialogConstraintComponent>,
    @Inject(MAT_DIALOG_DATA) public customerId: string,) {
    this.form = new UntypedFormGroup({
      category: new UntypedFormControl(null, [Validators.required,]),
      method: new UntypedFormControl(null, [Validators.required,]),
      sysId: new UntypedFormControl(null, []),
      expiredAt: new UntypedFormControl(null, []),
      remark: new UntypedFormControl(null, [Validators.required, Validators.maxLength(256)]),
    });
  }

  ngOnInit() {
    this._loadSystemItems();
    this.form.controls['expiredAt'].disable();
    this.form.controls['sysId'].disable();
  }

  onSaveClick(): void {
    let dto = new CtmCttAddDto();
    dto.ctmId = this.customerId;
    dto.category = this.form.controls['category'].value;
    dto.method = this.form.controls['method'].value;
    dto.sysId = this.form.controls['sysId'].value;
    dto.expiredAt = this.form.controls['expiredAt'].value;
    dto.remark = this.form.controls['remark'].value;
    this.hostServ.addConstraint(dto).subscribe({
      next: res => {
        if (res.success) {
          this.dialogRef.close({ op: 'save', });
        } else {
          const msg = `约束添加失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `约束添加失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

  onCloseClick(): void {
    this.dialogRef.close({ op: 'close' });
  }

  onCategeryChange($event: any): void {
    if ($event !== CttCategory.customer_one_system) {
      this.form.controls['sysId'].disable();
      this.sysEnabled = false;
    } else {
      this.form.controls['sysId'].enable();
      this.sysEnabled = true;
    }
  }

  onMethodChange($event: any): void {
    if ($event !== CttMethod.lock) {
      this.expiredAtEnabled = false;
    } else {
      this.expiredAtEnabled = true;
    }
  }

  private _loadSystemItems() {
    this.hostServ.getSystemItems().subscribe({
      next: res => {
        if (res.success) {
          this.sysOptions = res.data as OptionItem[];
        } else {
          const msg = `系统信息加载失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `系统信息加载失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
        this.sysOptions = [
          { key: '1', value: '用户中心' },
          { key: '2', value: '存储中心' },]
      }
    });
  }

}
