import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface AccountElement {
  id: string | null;
  avatar: string;
  name: string;
  nickname: string;
  remark: string;
  createdAt: Date | null;
}

export interface AuthPeopleElement {
  id: string;
  customerId: string;
  fullName: string;
  gender: '1' | '2';//男 女
  birthday: Date;
  education: string;
  profession: string;
  intro: string;
}

export interface AuthRoleElement {
  id: string;
  rank: number;// 1：默认 2：普通用户 10：会员  100：业务员  1000：管理员 10000：超级管理员
  name: string;
}

export interface AuthElement {
  account: AccountElement;    // 账号信息
  people: AuthPeopleElement;  // 个人信息
  role: AuthRoleElement;      // 角色
  sections: string[];         // 可进入模块
  functions: string[];        // 可操作功能
  token: string;              // JWT
  key: string;                // 本次登录主键
}

export interface LoginDto {
  userName: string;
  password: string;
}

export interface RegisterDto {
  userName: string;
  fullName: string;
  nickName: string;
  gender: string;
  birthday: Date;
  password: string;
  education: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.hostUrl + 'auth';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  // 登录 

  // 注册

  public getAccount(): AccountElement {
    const account: AccountElement = {
      id: '1', avatar: '', name: 'zhangsan', nickname: '张三',
      createdAt: new Date(), remark: '撒看见达萨达撒旦撒旦'
    };
    return account;
  }

}
