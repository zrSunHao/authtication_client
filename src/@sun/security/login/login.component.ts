import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

import { NgxPermissionsService } from 'ngx-permissions';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { AuthService } from 'src/@sun/shared/services/auth.service';
import { AcctElet, AuthResult, AuthRoleElet, AUTH_PERMISSION_DATA, LoginDto, Permission } from 'src/@sun/models/auth.model';
import { PeopleElet } from 'src/@sun/models/customer.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: UntypedFormGroup;

  constructor(private router: Router,
    private notifyServ: NotifyService,
    private hostServ: AuthService,
    private permissionsServ: NgxPermissionsService,) {
    this.form = new UntypedFormGroup({
      userName: new UntypedFormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z][a-zA-Z0-9_]{5,15}$/)]),
      password: new UntypedFormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,17}$/)]),
    });
  }

  ngOnInit() {
  }

  login(): void {
    const dto: LoginDto = { userName: '', password: '', sysCode: environment.sysCode, pgmCode: environment.pgmCode };
    dto.password = this.form.controls['password'].value;
    dto.userName = this.form.controls['userName'].value;
    this.hostServ.login(dto).subscribe({
      next: res => {
        if (res.success) {
          const auth = res.data as AuthResult;
          this.hostServ.setAuthInfo(auth);
          this.hostServ.setPerms(auth);
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 500);
        } else {
          const msg = `登录失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `登录失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
      }
    });
  }



}
