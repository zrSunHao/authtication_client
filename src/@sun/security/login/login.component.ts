import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NgxPermissionsService } from 'ngx-permissions';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { AuthService } from 'src/@sun/shared/services/auth.service';
import { AcctElet, AuthResult, AuthRoleElet, AUTH_PERMISSION_DATA, LoginDto } from 'src/@sun/models/auth.model';
import { PeopleElet } from 'src/@sun/models/customer.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router,
    private notifyServ: NotifyService,
    private hostServ: AuthService,
    private permissionsServ: NgxPermissionsService,) {
    this.form = new FormGroup({
      userName: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z][a-zA-Z0-9_]{5,15}$/)]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,17}$/)]),
    });
  }

  ngOnInit() {
  }

  login(): void {
    const dto: LoginDto = { userName: '', password: '' };
    dto.password = this.form.controls['password'].value;
    dto.userName = this.form.controls['userName'].value;
    this.hostServ.login(dto).subscribe({
      next: res => {
        if (res.success) {
          const auth = res.data as AuthResult;
          this.hostServ.setAuthInfo(auth);
          let functs: string[] = [];
          auth.perms.forEach(p => {
            if (p && p.funcs.length > 0) functs = [...functs, ...p.funcs]
          });
          this.permissionsServ.loadPermissions(functs);
          this.router.navigate(['/']);
        } else {
          const msg = `登录失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `登录失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');

        const auth: AuthResult = new AuthResult() // TODO 删除
        const account = new AcctElet();
        account.name = this.form.controls['userName'].value;
        auth.account = account;
        auth.people = new PeopleElet();
        auth.role = new AuthRoleElet ();
        auth.perms = AUTH_PERMISSION_DATA;
        this.hostServ.setAuthInfo(auth); // TODO 删除
        let functs: string[] = [];
        auth.perms.forEach(p => {
          if (p && p.funcs.length > 0) functs = [...functs, ...p.funcs]
        });
        this.permissionsServ.loadPermissions(functs); // TODO 删除
        this.router.navigate(['/']); // TODO 删除
      }
    });
  }

}
