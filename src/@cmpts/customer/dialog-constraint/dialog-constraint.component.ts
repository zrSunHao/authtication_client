import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OptionItem } from 'src/@sun/models/paging.model';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { CustomerService } from '../customer.service';
import { CustomerConstraintAddDto } from '../model';

@Component({
  selector: 'app-dialog-constraint',
  templateUrl: './dialog-constraint.component.html',
  styleUrls: ['./dialog-constraint.component.scss']
})
export class DialogConstraintComponent implements OnInit {

  title: string = '添加约束';
  expiredAtEnabled = false;
  sysEnabled = false;
  form: FormGroup;
  sysOptions: OptionItem[] = [];
  categoryOptions: OptionItem[] = [
    { key: '1', value: '账号  - >  所有系统' },
    { key: '2', value: '账号  - >  某系统' },]

  constructor(private notifyServ: NotifyService,
    private hostServ: CustomerService,
    private dialogRef: MatDialogRef<DialogConstraintComponent>,
    @Inject(MAT_DIALOG_DATA) public customerId: string,) {
    this.form = new FormGroup({
      category: new FormControl(null, [Validators.required,]),
      method: new FormControl(null, [Validators.required,]),
      sysId: new FormControl(null, []),
      expiredAt: new FormControl(null, []),
      remark: new FormControl(null, [Validators.required, Validators.maxLength(256)]),
    });
  }

  ngOnInit() {
    this._loadSystemItems();
    this.form.controls['expiredAt'].disable();
    this.form.controls['sysId'].disable();
  }

  onSaveClick(): void {
    let dto = new CustomerConstraintAddDto();
    dto.customerId = this.customerId;
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

  onCategeryChange($event:any): void {
    if ($event !== '2') {
      this.form.controls['sysId'].disable();
      this.sysEnabled = false;
    } else {
      this.form.controls['sysId'].enable();
      this.sysEnabled = true;
    }
  }

  onMethodChange($event:any): void {
    if ($event !== '2') {
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
