import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ResponseResult } from 'src/@sun/models/paging.model';
import { environment } from 'src/environments/environment';
import { ConstraintElement, CustomerElement, LogElement, WidgetElement } from './model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl = environment.hostUrl + 'report';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  public getCustomers(): Observable<ResponseResult<CustomerElement[]>> {
    const url = `${this.baseUrl}/getRecentCustomers`;
    return this.http.get<ResponseResult<CustomerElement[]>>(url).pipe(catchError(this.handleError));
  }

  public getLogs(): Observable<ResponseResult<LogElement[]>> {
    const url = `${this.baseUrl}/getRecentLogs`;
    return this.http.get<ResponseResult<LogElement[]>>(url).pipe(catchError(this.handleError));
  }

  public getConstraints(): Observable<ResponseResult<ConstraintElement[]>> {
    const url = `${this.baseUrl}/getRecentConstraints`;
    return this.http.get<ResponseResult<ConstraintElement[]>>(url).pipe(catchError(this.handleError));
  }

  public getWidgets(): Observable<ResponseResult<WidgetElement[]>> {
    const url = `${this.baseUrl}/getWidgets`;
    return this.http.get<ResponseResult<WidgetElement[]>>(url).pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    const msg = `${error.status}  ${error.message}`
    return throwError(() => msg);
  }

}
