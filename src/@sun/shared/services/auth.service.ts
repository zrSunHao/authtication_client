import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { catchError, Observable, throwError } from 'rxjs';
import { ResponseResult } from 'src/@sun/models/paging.model';
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
  private key = 'auth';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  private auth: AuthElement | undefined;

  constructor(public http: HttpClient,
    private permissionsServ: NgxPermissionsService,) {
    const json = localStorage.getItem(this.key);
    if (json) this.auth = JSON.parse(json);
    if (this.auth) this.permissionsServ.loadPermissions(this.auth.functions);
  }

  public login(param: LoginDto): Observable<ResponseResult<AuthElement>> {
    const url = `${this.baseUrl}/login`;
    return this.http.post<ResponseResult<AuthElement>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public register(param: RegisterDto): Observable<ResponseResult<AuthElement>> {
    const url = `${this.baseUrl}/register`;
    return this.http.post<ResponseResult<AuthElement>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    const msg = `${error.status}  ${error.message}`
    return throwError(() => msg);
  }



  public setAuthInfo(auth: AuthElement): void {
    if (auth) {
      const json = JSON.stringify(auth);
      localStorage.setItem(this.key, json);
      this.auth = auth;
    }
  }

  public getAccount(): AccountElement {
    if (this.auth) return this.auth.account;
    const account: AccountElement = {
      id: '', avatar: '', name: '', nickname: '',
      createdAt: new Date(), remark: '这是假数据'
    };
    return account;
  }

  public getRole(): AuthRoleElement {
    if (this.auth) return this.auth.role;
    const role: AuthRoleElement =
      { id: '', rank: -1, name: '' };
    return role;
  }

  public getFunctions(): string[] {
    if (this.auth) return this.auth.functions;
    return environment.superFunctions;
  }

  public getSections(): string[] {
    if (this.auth) return this.auth.sections;
    return environment.superSections;
  }

}
