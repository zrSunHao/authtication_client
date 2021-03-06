import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { catchError, Observable, throwError } from 'rxjs';
import { AcctElet, AuthResult, AuthRoleElet, AUTH_PERMISSION_DATA, LoginDto, Permission, RegisterDto, UserLogElet, UserLogFilter } from 'src/@sun/models/auth.model';
import { OptionItem, PagingParameter, ResponsePagingResult, ResponseResult } from 'src/@sun/models/paging.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.hostUrl + 'user';
  private sysUrl = environment.hostUrl + 'sys';
  public key = 'auth';
  public tokenkey = 'token';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };
  private auth: AuthResult | undefined;

  constructor(public http: HttpClient,
    private permissionsServ: NgxPermissionsService,) {
    const json = localStorage.getItem(this.key);
    if (json) this.auth = JSON.parse(json);
    if (this.auth) this.setPerms(this.auth);
  }

  public login(param: LoginDto): Observable<ResponseResult<AuthResult>> {
    const url = `${this.baseUrl}/login`;
    return this.http.post<ResponseResult<AuthResult>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public register(param: RegisterDto): Observable<ResponseResult<AuthResult>> {
    const url = `${this.baseUrl}/register`;
    return this.http.post<ResponseResult<AuthResult>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public logout(): Observable<ResponseResult<AuthResult>> {
    const url = `${this.baseUrl}/logout`;
    return this.http.delete<ResponseResult<AuthResult>>(url, this.httpOptions).pipe(catchError(this.handleError));
  }

  public log(operate: string, remark: string): void {
    if (!this.auth) return;
    const url = `${this.baseUrl}/addlog?operate=${operate}&remark=${remark}`;
    this.http.post<any>(url, null, this.httpOptions)
      .pipe(catchError(this.handleError))
      .subscribe({ next: res => { }, error: err => { } });
  }

  public getLogList(params: PagingParameter<UserLogFilter>): Observable<ResponsePagingResult<UserLogElet>> {
    const url = `${this.baseUrl}/GetLogList`;
    return this.http.post<ResponsePagingResult<UserLogElet>>(url, params, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getSystemItems(): Observable<ResponseResult<OptionItem[]>> {
    const url = `${this.sysUrl}/GetOptions`;
    return this.http.get<ResponseResult<OptionItem[]>>(url)
      .pipe(catchError(this.handleError));
  }

  public getRoleItems(sysId: string): Observable<ResponseResult<OptionItem[]>> {
    const url = `${this.sysUrl}/GetRoleOptions?sysId=${sysId}`;
    return this.http.get<ResponseResult<OptionItem[]>>(url)
      .pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    const msg = `${error.status}  ${error.message}`
    return throwError(() => msg);
  }



  // ----------------------------------------------------------------


  public setPerms(auth: AuthResult) {
    let functs: string[] = [];
    if (environment.all_permission) {
      AUTH_PERMISSION_DATA.forEach(p => {
        if (p && p.funcs.length > 0) functs = [...functs, ...p.funcs]
      });
    } else {
      functs = auth.functCodes;
    }
    this.permissionsServ.loadPermissions(functs);
  }

  public clear(): void {
    this.auth = undefined;
    localStorage.removeItem(this.key);
    localStorage.clear();
  }

  public setAuthInfo(auth: AuthResult): void {
    if (auth) {
      this.auth = auth;
      const json = JSON.stringify(auth);
      localStorage.setItem(this.key, json);
      localStorage.setItem(this.tokenkey, auth.token);
      this.auth = auth;
    }
  }

  public getCustomer(): AcctElet {
    if (this.auth?.customer) return this.auth.customer;
    else {
      const json = localStorage.getItem(this.key);
      if (json) {
        this.auth = JSON.parse(json);
        if (this.auth?.customer) return this.auth?.customer;
        else return new AcctElet();
      } else return new AcctElet();
    }
  }

  public getRole(): AuthRoleElet {
    if (this.auth?.role) return this.auth.role;
    else return new AuthRoleElet();
  }

  public getFunctions(): string[] {
    let functs: string[] = [];
    if (environment.all_permission) {
      AUTH_PERMISSION_DATA.forEach(p => {
        if (p && p.funcs.length > 0) functs = [...functs, ...p.funcs]
      });
    } else {
      this.auth = this.getInfo();
      if (this.auth) functs = this.auth.functCodes;
    }
    return functs;
  }

  public getSections(): string[] {
    let sects: string[] = [];
    if (environment.all_permission) AUTH_PERMISSION_DATA.forEach(x => { sects.push(x.sect); });
    else {
      this.auth = this.getInfo();
      if (this.auth) sects = this.auth.sectCodes;
    }
    return sects;
  }

  public getToken(): string {
    var t = localStorage.getItem(this.tokenkey);
    if (!t) t = '';
    return t;
  }

  private getInfo(): AuthResult {
    const json = localStorage.getItem(this.key);
    if (json) this.auth = JSON.parse(json);
    else return new AuthResult;
    if (this.auth) return this.auth;
    else return new AuthResult;
  }

}
