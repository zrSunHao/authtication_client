import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment'
import { PagingParameter, ResponsePagingResult, ResponseResult } from 'src/@sun/models/paging.model';
import { ConstraintElement, ConstraintSearchDto } from './model';

@Injectable({
  providedIn: 'root'
})
export class ConstraintService {

  private baseUrl = environment.hostUrl + 'constraint';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  public serach(params: PagingParameter<ConstraintSearchDto>): Observable<ResponsePagingResult<ConstraintElement>> {
    const url = `${this.baseUrl}/search`;
    return this.http.post<ResponsePagingResult<ConstraintElement>>(url, params, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public cancel(id: string) {
    const url = `${this.baseUrl}/cancel?id=${id}`;
    return this.http.get<ResponseResult<boolean>>(url)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    const msg = `${error.status}  ${error.message}`
    return throwError(() => msg);
  }

}
