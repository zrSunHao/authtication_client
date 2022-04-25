import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment'
import { PagingParameter, ResponsePagingResult } from 'src/@sun/models/paging.model';
import { ConstraintElement, ConstraintSearchDto } from './model';

@Injectable({
  providedIn: 'root'
})
export class ConstraintService {

  baseUrl = environment.hostUrl + 'constraint';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  serach(params: PagingParameter<ConstraintSearchDto>): Observable<ResponsePagingResult<ConstraintElement>> {
    const url = `${this.baseUrl}/search`;
    return this.http.post<ResponsePagingResult<ConstraintElement>>(url, params, this.httpOptions).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    const res = new ResponsePagingResult<ConstraintElement>();
    res.allMessages = `${error.status}  ${error.message}`;
    const ob = new Observable<ResponsePagingResult<ConstraintElement>>((sub) => {
      sub.next(res);
    });
    return ob;
  }

}
