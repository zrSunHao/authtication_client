import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterDto } from 'src/@sun/models/auth.model';
import { CTM_EDUCATION_OPS, CTM_GENDER_OPS, GenderType } from 'src/@sun/models/customer.model';
import { OptionItem } from 'src/@sun/models/paging.model';
import { AuthService } from 'src/@sun/shared/services/auth.service';
import { NotifyService } from 'src/@sun/shared/services/notify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: UntypedFormGroup;
  gerderOps: OptionItem[] = CTM_GENDER_OPS;
  eduOps: OptionItem[] = CTM_EDUCATION_OPS;

  constructor(private router: Router,
    private notifyServ: NotifyService,
    private hostServ: AuthService,) {
    this.form = new UntypedFormGroup({
      userName: new UntypedFormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z][a-zA-Z0-9_]{5,15}$/)]),
      fullName: new UntypedFormControl(null, [Validators.required, Validators.pattern(/^[\u4E00-\u9FA5A-Za-z0-9_]{2,16}$/)]),
      nickName: new UntypedFormControl(null, [Validators.required, Validators.pattern(/^[\u4E00-\u9FA5A-Za-z0-9_]{2,32}$/)]),
      gender: new UntypedFormControl(null, [Validators.required]),
      birthday: new UntypedFormControl(null, [Validators.required]),
      password: new UntypedFormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,17}$/)]),
      confirmPsd: new UntypedFormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,17}$/)]),
      education: new UntypedFormControl(null, [Validators.required]),
    })
  }

  ngOnInit() {
    this.form.controls['birthday'].disable();
  }

  register(): void {
    const dto: RegisterDto = {
      userName: '', password: '',
      fullName: '', nickName: '',
      gender: GenderType.other, birthday: new Date(),
      education: ''
    };
    dto.userName = this.form.controls['userName'].value;
    dto.password = this.form.controls['password'].value;
    dto.fullName = this.form.controls['fullName'].value;
    dto.nickName = this.form.controls['nickName'].value;
    dto.gender = this.form.controls['gender'].value;
    dto.birthday = this.form.controls['birthday'].value;
    dto.education = this.form.controls['education'].value;

    this.hostServ.register(dto).subscribe({
      next: res => {
        if (res.success) {
          const msg = `注册成功！！！`;
          this.notifyServ.notify(msg, 'success');
          this.router.navigate(['/security/login']);
        } else {
          const msg = `注册失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `注册失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }

}
