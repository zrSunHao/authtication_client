import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { OptionItem, PagingParameter, ResponsePagingResult, ResponseResult } from 'src/@sun/models/paging.model';
import { environment } from 'src/environments/environment';
import { CtmCttElet, CtmCttAddDto, CtmCttFilter, CtmElet, CtmLogFilter, CtmRoleUpdateDto, CtmRoleElet, CtmRoleFilter, CtmFilter, CtmLogElet, PeopleElet } from '../../@sun/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = environment.hostUrl + 'customer';
  private sysUrl = environment.hostUrl + 'sys';
  private resourceUrl = environment.hostUrl + 'resource';
  private cttUrl = environment.hostUrl + 'constraint';
  private resourceCategory = 'ctm';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  public search(params: PagingParameter<CtmFilter>): Observable<ResponsePagingResult<CtmElet>> {
    const url = `${this.baseUrl}/GetList`;
    return this.http.post<ResponsePagingResult<CtmElet>>(url, params, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public remark(id: string, msg: string): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/AddRemark?ctmId=${id}&remark=${msg}`;
    return this.http.patch<ResponseResult<boolean>>(url, null)
      .pipe(catchError(this.handleError));
  }

  public reset(id: string, newPsd: string): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/ResetPsd?ctmId=${id}&psd=${newPsd}`;
    return this.http.patch<ResponseResult<boolean>>(url, null)
      .pipe(catchError(this.handleError));
  }

  public getById(id: string): Observable<ResponseResult<CtmElet>> {
    const url = `${this.baseUrl}/getById?ctmId=${id}`;
    return this.http.get<ResponseResult<CtmElet>>(url)
      .pipe(catchError(this.handleError));
  }

  public icon(ownerId: string, formData: FormData): Observable<ResponseResult<string>> {
    const url = `${this.resourceUrl}/Save?ownerId=${ownerId}&category=${this.resourceCategory}`;
    return this.http.post<ResponseResult<string>>(url, formData)
      .pipe(catchError(this.handleError));
  }

  public getPeopleById(id: string): Observable<ResponseResult<PeopleElet>> {
    const url = `${this.baseUrl}/GetPeople?ctmId=${id}`;
    return this.http.get<ResponseResult<PeopleElet>>(url)
      .pipe(catchError(this.handleError));
  }

  public updatePeople(param: PeopleElet): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/UpdatePeople`;
    return this.http.patch<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }


  public searchRoles(param: PagingParameter<CtmRoleFilter>): Observable<ResponsePagingResult<CtmRoleElet>> {
    const url = `${this.baseUrl}/GetRoleList`;
    return this.http.post<ResponsePagingResult<CtmRoleElet>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public addRole(param: CtmRoleUpdateDto): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/AddRole`;
    return this.http.post<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public updateRole(param: CtmRoleUpdateDto): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/UpdateRole`;
    return this.http.patch<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public deleteRole(ctmId: string, roleId: string): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/deleteRole?ctmId=${ctmId}&roleId=${roleId}&`;
    return this.http.delete<ResponseResult<boolean>>(url)
      .pipe(catchError(this.handleError));
  }



  public searchConstraints(param: PagingParameter<CtmCttFilter>): Observable<ResponsePagingResult<CtmCttElet>> {
    const url = `${this.baseUrl}/GetCttList`;
    return this.http.post<ResponsePagingResult<CtmCttElet>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public deleteConstraint(id: string): Observable<ResponseResult<boolean>> {
    const url = `${this.cttUrl}/Cancel?id=${id}`;
    return this.http.delete<ResponseResult<boolean>>(url)
      .pipe(catchError(this.handleError));
  }

  public addConstraint(param: CtmCttAddDto): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/AddCtt`;
    return this.http.post<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public searchLogs(param: PagingParameter<CtmLogFilter>): Observable<ResponsePagingResult<CtmLogElet>> {
    const url = `${this.baseUrl}/GetLogList`;
    return this.http.post<ResponsePagingResult<CtmLogElet>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
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

}
