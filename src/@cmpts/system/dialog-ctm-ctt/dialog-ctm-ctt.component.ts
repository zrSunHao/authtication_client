import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OptionItem } from 'src/@sun/models/paging.model';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { CtmCttAddDto } from 'src/@sun/models/customer.model';
import { CttCategory, CttMethod, CTT_CATEGERY_OPS, CTT_METHOD_OPS } from 'src/@sun/models/constraint.model';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-dialog-ctm-ctt',
  templateUrl: './dialog-ctm-ctt.component.html',
  styleUrls: ['./dialog-ctm-ctt.component.scss']
})
export class DialogCtmCttComponent implements OnInit {

  title: string = '添加约束';
  expiredAtEnabled = false;
  sysEnabled = false;
  form: UntypedFormGroup;
  sysOptions: OptionItem[] = [];
  methodOps: OptionItem[] = [CTT_METHOD_OPS[1], CTT_METHOD_OPS[2]];

  constructor(private notifyServ: NotifyService,
    private hostServ: SystemService,
    private dialogRef: MatDialogRef<DialogCtmCttComponent>,
    @Inject(MAT_DIALOG_DATA) public dto: CtmCttAddDto,) {
    this.form = new UntypedFormGroup({
      method: new UntypedFormControl(null, [Validators.required,]),
      expiredAt: new UntypedFormControl(null, []),
      remark: new UntypedFormControl(null, [Validators.required, Validators.maxLength(256)]),
    });
  }

  ngOnInit() {
    this.form.controls['expiredAt'].disable();
  }

  onSaveClick(): void {
    let dto: CtmCttAddDto = this.dto;
    dto.category = CttCategory.customer_one_system;
    dto.method = this.form.controls['method'].value;
    dto.expiredAt = this.form.controls['expiredAt'].value;
    dto.remark = this.form.controls['remark'].value;
    this.hostServ.addCtmConstraint(dto).subscribe({
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

  onMethodChange($event: any): void {
    if ($event !== CttMethod.lock) {
      this.expiredAtEnabled = false;
    } else {
      this.expiredAtEnabled = true;
    }
  }
}
