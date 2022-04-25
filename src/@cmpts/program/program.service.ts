import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment'
import { PagingParameter, ResponsePagingResult, ResponseResult } from 'src/@sun/models/paging.model';
import { ProgramElement, ProgramSearchDto } from './model';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  private baseUrl = environment.hostUrl + 'program';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  public serach(params: PagingParameter<ProgramSearchDto>): Observable<ResponsePagingResult<ProgramElement>> {
    const url = `${this.baseUrl}/search`;
    return this.http.post<ResponsePagingResult<ProgramElement>>(url, params, this.httpOptions).pipe(catchError(this.handleError));
  }

  public add(params: ProgramElement): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/add`;
    return this.http.post<ResponseResult<boolean>>(url, params, this.httpOptions).pipe(catchError(this.handleError));
  }

  public update(params: ProgramElement): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/update`;
    return this.http.post<ResponseResult<boolean>>(url, params, this.httpOptions).pipe(catchError(this.handleError));
  }

  public delete(id: string) {
    const url = `${this.baseUrl}/delete?id=${id}`;
    return this.http.get<ResponseResult<boolean>>(url)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    const msg = `${error.status}  ${error.message}`
    return throwError(() => msg);
  }

}
