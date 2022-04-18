import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {

  userName: string = '账号';
  nickName: string = '昵称';
  registedAt: Date = new Date();
  loginedAt: Date = new Date();
  remark: string = '这是备注';
  avatar: string = '/assets/images/logo_256.png';
  constructor() { }

  ngOnInit() {
  }

}
