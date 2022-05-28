import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { OptionItem, PagingParameter, ResponsePagingResult, ResponseResult } from 'src/@sun/models/paging.model';
import { environment } from 'src/environments/environment';
import { CtmCttElet, CtmCttAddDto, CtmCttFilter, CtmElet, CtmLogFilter, CtmRoleAddDto, CtmRoleElet, CtmRoleFilter, CtmFilter, CtmLogElet, PeopleElet } from '../../@sun/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = environment.hostUrl + 'customer';
  private sysUrl = environment.hostUrl + 'sys';
  private roleUrl = environment.hostUrl + 'role';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  public search(params: PagingParameter<CtmFilter>): Observable<ResponsePagingResult<CtmElet>> {
    const url = `${this.baseUrl}/search`;
    return this.http.post<ResponsePagingResult<CtmElet>>(url, params, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public remark(id: string, msg: string): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/remark?id=${id}&msg=${msg}`;
    return this.http.get<ResponseResult<boolean>>(url)
      .pipe(catchError(this.handleError));
  }

  public reset(id: string, newPsd: string): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/reset?id=${id}&newPsd=${newPsd}`;
    return this.http.get<ResponseResult<boolean>>(url)
      .pipe(catchError(this.handleError));
  }

  public getById(id: string): Observable<ResponseResult<CtmElet>> {
    const url = `${this.baseUrl}/getById?id=${id}`;
    return this.http.get<ResponseResult<CtmElet>>(url)
      .pipe(catchError(this.handleError));
  }

  public deleteRole(id: string): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/deleteRole?id=${id}`;
    return this.http.get<ResponseResult<boolean>>(url)
      .pipe(catchError(this.handleError));
  }

  public deleteConstraint(id: string): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/deleteConstraint?id=${id}`;
    return this.http.get<ResponseResult<boolean>>(url)
      .pipe(catchError(this.handleError));
  }

  public icon(formData: FormData): Observable<ResponseResult<string>> {
    const url = `${this.baseUrl}/icon`;
    return this.http.post<ResponseResult<string>>(url, formData)
      .pipe(catchError(this.handleError));
  }

  public getPeopleById(id: string): Observable<ResponseResult<PeopleElet>> {
    const url = `${this.baseUrl}/getPeopleById?id=${id}`;
    return this.http.get<ResponseResult<PeopleElet>>(url)
      .pipe(catchError(this.handleError));
  }

  public updatePeople(param: PeopleElet): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/updatePeople`;
    return this.http.post<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public searchRoles(param: PagingParameter<CtmRoleFilter>): Observable<ResponsePagingResult<CtmRoleElet>> {
    const url = `${this.baseUrl}/searchRoles`;
    return this.http.post<ResponsePagingResult<CtmRoleElet>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public addRole(param: CtmRoleAddDto): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/addRole`;
    return this.http.post<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public updateRole(param: CtmRoleAddDto): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/updateRole`;
    return this.http.post<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public searchConstraints(param: PagingParameter<CtmCttFilter>): Observable<ResponsePagingResult<CtmCttElet>> {
    const url = `${this.baseUrl}/searchConstraints`;
    return this.http.post<ResponsePagingResult<CtmCttElet>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public addConstraint(param: CtmCttAddDto): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/addConstraint`;
    return this.http.post<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public searchLogs(param: PagingParameter<CtmLogFilter>): Observable<ResponsePagingResult<CtmLogElet>> {
    const url = `${this.baseUrl}/searchLogs`;
    return this.http.post<ResponsePagingResult<CtmLogElet>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public getSystemItems(): Observable<ResponseResult<OptionItem[]>> {
    const url = `${this.sysUrl}/getItems`;
    return this.http.get<ResponseResult<OptionItem[]>>(url)
      .pipe(catchError(this.handleError));
  }

  public getRoleItems(sysId: string): Observable<ResponseResult<OptionItem[]>> {
    const url = `${this.roleUrl}/getItems?sysId=${sysId}`;
    return this.http.get<ResponseResult<OptionItem[]>>(url)
      .pipe(catchError(this.handleError));
  }

  
  private handleError(error: HttpErrorResponse) {
    const msg = `${error.status}  ${error.message}`
    return throwError(() => msg);
  }

}
