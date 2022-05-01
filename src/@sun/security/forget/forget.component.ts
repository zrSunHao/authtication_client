import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from 'src/@sun/shared/services/auth.service';
import { NotifyService } from 'src/@sun/shared/services/notify.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {

  constructor(private router: Router,
    private notifyServ: NotifyService,
    private hostServ: AuthService,) { }

  ngOnInit() {
  }

  confirm(): void {
    this.router.navigateByUrl('/security/login/');
  }

}
