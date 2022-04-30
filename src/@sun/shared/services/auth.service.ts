import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface AccountElement {
  id: string | null;
  avatar: string;
  name: string;
  nickname: string;
  limited: '0' | '1';
  lastLoginAt: Date;
  remark: string;
  createdAt: Date | null;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.hostUrl + 'customer';
  private authUrl = environment.hostUrl + 'auth';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  public getAccount(): AccountElement {
    const account: AccountElement = {
      id: '1', avatar: '', name: 'zhangsan', nickname: '张三',
      limited: '0', lastLoginAt: new Date(), createdAt: new Date(), remark: '撒看见达萨达撒旦撒旦'
    };
    return account;
  }

}
