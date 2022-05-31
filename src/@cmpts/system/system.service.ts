import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { PagingParameter, ResponsePagingResult, ResponseResult } from 'src/@sun/models/paging.model';
import { environment } from 'src/environments/environment';
import { SysPgmElet, RoleElet, SysRoleRelation, SysRolePgmElet, SysRoleFilter, SysElet, SysOwnedPgmFilter, SysNotOwnedPgmFilter, SysFilter } from '../../@sun/models/system.model';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  private baseUrl = environment.hostUrl + 'sys';
  private resourceUrl = environment.hostUrl + 'resource';
  private resourceCategory = environment.hostUrl + 'sys';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  // ---------------- system ------------------

  public serach(param: PagingParameter<SysFilter>): Observable<ResponsePagingResult<SysElet>> {
    const url = `${this.baseUrl}/GetList`;
    return this.http.post<ResponsePagingResult<SysElet>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public add(param: SysElet): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/Add`;
    return this.http.post<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public update(param: SysElet): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/Update`;
    return this.http.patch<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public delete(id: string): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/Delete?id=${id}`;
    return this.http.delete<ResponseResult<boolean>>(url)
      .pipe(catchError(this.handleError));
  }

  public icon(ownerId: string, formData: FormData): Observable<ResponseResult<string>> {
    const url = `${this.resourceUrl}/Save?ownerId=${ownerId}&category=${this.resourceCategory}`;
    return this.http.post<ResponseResult<string>>(url, formData)
      .pipe(catchError(this.handleError));
  }

  // ---------------- program config ------------------

  public searchPrograms(filter: SysNotOwnedPgmFilter): Observable<ResponsePagingResult<SysPgmElet>> {
    const url = `${this.baseUrl}/GetNotOwnedPgmList`;
    var param = new PagingParameter<SysNotOwnedPgmFilter>();
    param.filter = filter;
    return this.http.post<ResponsePagingResult<SysPgmElet>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public getPrograms(filter: SysOwnedPgmFilter): Observable<ResponsePagingResult<SysPgmElet>> {
    const url = `${this.baseUrl}/GetOwnedPgmList`;
    var param = new PagingParameter<SysOwnedPgmFilter>();
    param.filter = filter;
    return this.http.post<ResponsePagingResult<SysPgmElet>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public addProgram(sysId: string, pgmId: string): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/addPgm?sysId=${sysId}&pgmId=${pgmId}`;
    const d = new URLSearchParams();
    return this.http.post<ResponseResult<boolean>>(url, null)
      .pipe(catchError(this.handleError));
  }

  public deleteProgram(sysId: string, programId: string): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/deletePgm?sysId=${sysId}&pgmId=${programId}`;
    return this.http.delete<ResponseResult<boolean>>(url)
      .pipe(catchError(this.handleError));
  }

  // ---------------- role config ------------------

  public serachRoles(param: PagingParameter<SysRoleFilter>): Observable<ResponsePagingResult<RoleElet>> {
    const url = `${this.baseUrl}/GetRoleList`;
    return this.http.post<ResponsePagingResult<RoleElet>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public addRole(param: RoleElet): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/AddRole`;
    return this.http.post<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public updateRole(param: RoleElet): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/UpdateRole`;
    if(!param.intro) param.intro='无';
    return this.http.patch<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public deleteRole(id: string): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/DeleteRole?id=${id}`;
    return this.http.delete<ResponseResult<boolean>>(url)
      .pipe(catchError(this.handleError));
  }

  public getRoleFunctions(id: string): Observable<ResponseResult<SysRolePgmElet[]>> {
    const url = `${this.baseUrl}/GetRolePgmList?id=${id}`;
    return this.http.get<ResponseResult<SysRolePgmElet[]>>(url, this.httpOptions).pipe(catchError(this.handleError));
  }

  public addRoleFunctions(param: SysRoleRelation): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/UpdateRolePgmFuncts`;
    return this.http.put<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  // ---------------- private ------------------

  private handleError(error: HttpErrorResponse) {
    const msg = `${error.status}  ${error.message}`
    return throwError(() => msg);
  }

}
