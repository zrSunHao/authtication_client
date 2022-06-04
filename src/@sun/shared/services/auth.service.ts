import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { catchError, Observable, throwError } from 'rxjs';
import { AcctElet, AuthResult, AuthRoleElet, AUTH_PERMISSION_DATA, LoginDto, Permission, RegisterDto } from 'src/@sun/models/auth.model';
import { ResponseResult } from 'src/@sun/models/paging.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.hostUrl + 'user';
  private key = 'auth';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  private auth: AuthResult | undefined;

  constructor(public http: HttpClient,
    private permissionsServ: NgxPermissionsService,) {
    const json = localStorage.getItem(this.key);
    if (json) this.auth = JSON.parse(json);
    if (this.auth) {
      let functs: string[] = [];
      this.auth.perms.forEach(p => {
        if (p && p.funcs.length > 0) functs = [...functs, ...p.funcs]
      });
      // AUTH_PERMISSION_DATA.forEach(p => {
      //   if (p && p.funcs.length > 0) functs = [...functs, ...p.funcs]
      // });
      this.permissionsServ.loadPermissions(functs);
    }
  }

  public login(param: LoginDto): Observable<ResponseResult<AuthResult>> {
    const url = `${this.baseUrl}/login`;
    return this.http.post<ResponseResult<AuthResult>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public register(param: RegisterDto): Observable<ResponseResult<AuthResult>> {
    const url = `${this.baseUrl}/register`;
    return this.http.post<ResponseResult<AuthResult>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    const msg = `${error.status}  ${error.message}`
    return throwError(() => msg);
  }



  public setAuthInfo(auth: AuthResult): void {
    if (auth) {
      const json = JSON.stringify(auth);
      localStorage.setItem(this.key, json);
      this.auth = auth;
    }
  }

  public getAccount(): AcctElet {
    if (this.auth?.account) return this.auth.account;
    else return new AcctElet();
  }

  public getRole(): AuthRoleElet {
    if (this.auth?.role) return this.auth.role;
    else return new AuthRoleElet();
  }

  public getFunctions(): string[] {
    if (this.auth) {
      let functs: string[] = [];
      this.auth.perms.forEach(p => {
        if (p && p.funcs.length > 0) functs = [...functs, ...p.funcs]
      });
      return functs;
    }
    return [];
  }

  public getSections(): string[] {
    if (this.auth) {
      let sects: string[] = [];
      this.auth.perms.forEach(p => {
        if (p) sects.push(p.sect);
      });
      return sects;
    }
    return [];
  }

}
