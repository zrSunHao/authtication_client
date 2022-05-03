import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NgxPermissionsService } from 'ngx-permissions';
import { NotifyService } from 'src/@sun/shared/services/notify.service';
import { AuthElement, AuthService, LoginDto } from 'src/@sun/shared/services/auth.service';
import { environment } from 'src/environments/environment';

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
          const auth = res.data as AuthElement;
          this.hostServ.setAuthInfo(auth);
          this.permissionsServ.loadPermissions(auth.functions);
          this.router.navigate(['/']);
        } else {
          const msg = `登录失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `登录失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
        const auth: AuthElement = {
          account: {
            id: '1111', avatar: '', name: 'zhangsan', nickname: '张三',
            createdAt: new Date(), remark: '这是假数据'
          },
          people: {
            id: '123', customerId: '111', fullName: '张三',
            gender: '1', birthday: new Date(), education: '研究生',
            profession: '计算机', intro: '这是假数据'
          },
          role: { id: '222', rank: 1, name: '默认用户' },
          sections: environment.superSections,
          functions: environment.superFunctions,
          token: '',
          key: ''
        }; // TODO 删除
        this.hostServ.setAuthInfo(auth); // TODO 删除
        this.permissionsServ.loadPermissions(auth.functions); // TODO 删除
        this.router.navigate(['/']); // TODO 删除
      }
    });
  }

}
