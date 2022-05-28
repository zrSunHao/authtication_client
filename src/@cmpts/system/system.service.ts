import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { PagingParameter, ResponsePagingResult, ResponseResult } from 'src/@sun/models/paging.model';
import { environment } from 'src/environments/environment';
import { SysPgmElet, RoleElet, SysRoleRelation, RoleFunctElet, SysRoleFilter, SysElet, SysPgmGetFilter, SysPgmFilter, SysFilter } from '../../@sun/models/system.model';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  private baseUrl = environment.hostUrl + 'system';
  private roleUrl = environment.hostUrl + 'role';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  // ---------------- system ------------------

  public serach(param: PagingParameter<SysFilter>): Observable<ResponsePagingResult<SysElet>> {
    const url = `${this.baseUrl}/search`;
    return this.http.post<ResponsePagingResult<SysElet>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public add(param: SysElet): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/add`;
    return this.http.post<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public update(param: SysElet): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/update`;
    return this.http.post<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public delete(id: string): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/delete?id=${id}`;
    return this.http.get<ResponseResult<boolean>>(url)
      .pipe(catchError(this.handleError));
  }

  public icon(formData: FormData): Observable<ResponseResult<string>> {
    const url = `${this.baseUrl}/icon`;
    return this.http.post<ResponseResult<string>>(url, formData)
      .pipe(catchError(this.handleError));
  }

  // ---------------- program config ------------------

  public searchPrograms(param: SysPgmFilter): Observable<ResponseResult<SysPgmElet[]>> {
    const url = `${this.baseUrl}/getPrograms`;
    return this.http.post<ResponseResult<SysPgmElet[]>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public getPrograms(param: SysPgmGetFilter): Observable<ResponseResult<SysPgmElet[]>> {
    const url = `${this.baseUrl}/getPrograms`;
    return this.http.post<ResponseResult<SysPgmElet[]>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public addProgram(sysId: string, programId: string): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/addProgram?sysId=${sysId}&programId=${programId}`;
    return this.http.get<ResponseResult<boolean>>(url)
      .pipe(catchError(this.handleError));
  }

  public deleteProgram(sysId: string, programId: string): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/deleteProgram?sysId=${sysId}&programId=${programId}`;
    return this.http.get<ResponseResult<boolean>>(url)
      .pipe(catchError(this.handleError));
  }

  // ---------------- role config ------------------

  public serachRoles(param: PagingParameter<SysRoleFilter>): Observable<ResponsePagingResult<RoleElet>> {
    const url = `${this.roleUrl}/search`;
    return this.http.post<ResponsePagingResult<RoleElet>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public addRole(param: RoleElet): Observable<ResponseResult<boolean>> {
    const url = `${this.roleUrl}/add`;
    return this.http.post<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public updateRole(param: RoleElet): Observable<ResponseResult<boolean>> {
    const url = `${this.roleUrl}/update`;
    return this.http.post<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public deleteRole(id: string): Observable<ResponseResult<boolean>> {
    const url = `${this.roleUrl}/delete?id=${id}`;
    return this.http.get<ResponseResult<boolean>>(url)
      .pipe(catchError(this.handleError));
  }

  public getRoleFunctions(id: string): Observable<ResponseResult<RoleFunctElet[]>> {
    const url = `${this.roleUrl}/getPrograms`;
    return this.http.post<ResponseResult<RoleFunctElet[]>>(url, this.httpOptions).pipe(catchError(this.handleError));
  }

  public addRoleFunctions(param: SysRoleRelation): Observable<ResponseResult<boolean>> {
    const url = `${this.roleUrl}/addFunctions`;
    return this.http.post<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  // ---------------- private ------------------

  private handleError(error: HttpErrorResponse) {
    const msg = `${error.status}  ${error.message}`
    return throwError(() => msg);
  }

}
