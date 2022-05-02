import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthElement, AuthService, LoginDto } from 'src/@sun/shared/services/auth.service';
import { NotifyService } from 'src/@sun/shared/services/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router,
    private notifyServ: NotifyService,
    private hostServ: AuthService,) {
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
          this.hostServ.setAuthInfo(res.data as AuthElement);
          this.router.navigate(['/']);
        } else {
          const msg = `登录失败！！！ ${res.allMessages}`;
          this.notifyServ.notify(msg, 'error');
        }
      },
      error: err => {
        const msg = `登录失败！！！ ${err}`;
        this.notifyServ.notify(msg, 'error');
        this.router.navigate(['/']); // TODO 删除
      }
    });
  }

}
