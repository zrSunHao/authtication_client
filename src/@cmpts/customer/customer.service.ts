import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { PagingParameter, ResponsePagingResult, ResponseResult } from 'src/@sun/models/paging.model';
import { environment } from 'src/environments/environment';
import { CustomerElement, CustomerSearchDto } from './model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = environment.hostUrl + 'customer';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  public serach(params: PagingParameter<CustomerSearchDto>): Observable<ResponsePagingResult<CustomerElement>> {
    const url = `${this.baseUrl}/search`;
    return this.http.post<ResponsePagingResult<CustomerElement>>(url, params, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public remark(id: string, msg: string) {
    const url = `${this.baseUrl}/remark?id=${id}&msg=${msg}`;
    return this.http.get<ResponseResult<boolean>>(url)
      .pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    const msg = `${error.status}  ${error.message}`
    return throwError(() => msg);
  }

}
