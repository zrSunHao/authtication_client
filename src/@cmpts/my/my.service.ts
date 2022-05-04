import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { PagingParameter, ResponsePagingResult, ResponseResult } from 'src/@sun/models/paging.model';
import { environment } from 'src/environments/environment';
import { CtmCttElet, CtmCttSearchDto, CtmElet, CtmLogSearchDto, CtmRoleElet, CtmRoleSearchDto, CtmLogElet, PeopleElet } from '../../@sun/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  private baseUrl = environment.hostUrl + 'customer';
  private authUrl = environment.hostUrl + 'auth';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  public getById(id: string): Observable<ResponseResult<CtmElet>> {
    const url = `${this.baseUrl}/getById?id=${id}`;
    return this.http.get<ResponseResult<CtmElet>>(url)
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
    return this.http.post<ResponseResult<boolean>>(url, param, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public reset(id: string, oldPsd: string, newPsd: string): Observable<ResponseResult<boolean>> {
    const url = `${this.authUrl}/reset?id=${id}&newPsd=${oldPsd}&newPsd=${newPsd}`;
    return this.http.get<ResponseResult<boolean>>(url)
      .pipe(catchError(this.handleError));
  }

  public searchRoles(param: PagingParameter<CtmRoleSearchDto>): Observable<ResponsePagingResult<CtmRoleElet>> {
    const url = `${this.baseUrl}/searchRoles`;
    return this.http.post<ResponsePagingResult<CtmRoleElet>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public searchConstraints(param: PagingParameter<CtmCttSearchDto>): Observable<ResponsePagingResult<CtmCttElet>> {
    const url = `${this.baseUrl}/searchConstraints`;
    return this.http.post<ResponsePagingResult<CtmCttElet>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public searchLogs(param: PagingParameter<CtmLogSearchDto>): Observable<ResponsePagingResult<CtmLogElet>> {
    const url = `${this.baseUrl}/searchLogs`;
    return this.http.post<ResponsePagingResult<CtmLogElet>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }



  private handleError(error: HttpErrorResponse) {
    const msg = `${error.status}  ${error.message}`
    return throwError(() => msg);
  }

}
