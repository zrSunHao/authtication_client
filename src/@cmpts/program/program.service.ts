import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment'
import { PagingParameter, ResponsePagingResult, ResponseResult } from 'src/@sun/models/paging.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  baseUrl = environment.hostUrl + 'constraint';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    const res = new ResponseResult<boolean>();
    res.allMessages = `${error.status}  ${error.message}`;
    const ob = new Observable<ResponseResult<boolean>>((sub) => {
      sub.next(res);
    });
    return ob;
  }

}
