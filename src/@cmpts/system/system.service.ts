import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { PagingParameter, ResponsePagingResult, ResponseResult } from 'src/@sun/models/paging.model';
import { environment } from 'src/environments/environment';
import { SystemElement, SystemSearchDto } from './model';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  private baseUrl = environment.hostUrl + 'system';
  private roleUrl = environment.hostUrl + 'role';
  private programUrl = environment.hostUrl + 'program';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  // ---------------- system ------------------

  public serach(param: PagingParameter<SystemSearchDto>): Observable<ResponsePagingResult<SystemElement>> {
    const url = `${this.baseUrl}/search`;
    return this.http.post<ResponsePagingResult<SystemElement>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public add(param: SystemElement): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/add`;
    return this.http.post<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public update(param: SystemElement): Observable<ResponseResult<boolean>> {
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



  // ---------------- role config ------------------



  // ---------------- private ------------------

  private handleError(error: HttpErrorResponse) {
    const msg = `${error.status}  ${error.message}`
    return throwError(() => msg);
  }

}
