import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PagingParameter, ResponsePagingResult } from 'src/@sun/models/paging.model';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment'
import { ConstraintElement, ConstraintSearchDto } from './model';
import { Observable, throwError } from 'rxjs';

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

  private handleError(error: HttpErrorResponse){
    const res = new ResponsePagingResult<ConstraintElement>();
    res.allMessages = `${error.status}  ${error.message}`;
    const ob = new Observable<ResponsePagingResult<ConstraintElement>>((sub) => {
      sub.next(res);
    });
    return ob;
  }

}
