import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CttElet } from 'src/@sun/models/constraint.model';
import { ResponseResult } from 'src/@sun/models/paging.model';
import { environment } from 'src/environments/environment';
import { ReportCtmElet, ReportLogElet, WidgetElet } from '../../@sun/models/report.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl = environment.hostUrl + 'report';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  public getCustomers(): Observable<ResponseResult<ReportCtmElet[]>> {
    const url = `${this.baseUrl}/GetRecentLoginCtmList`;
    return this.http.get<ResponseResult<ReportCtmElet[]>>(url).pipe(catchError(this.handleError));
  }

  public getLogs(): Observable<ResponseResult<ReportLogElet[]>> {
    const url = `${this.baseUrl}/GetRecentLogList`;
    return this.http.get<ResponseResult<ReportLogElet[]>>(url).pipe(catchError(this.handleError));
  }

  public getConstraints(): Observable<ResponseResult<CttElet[]>> {
    const url = `${this.baseUrl}/GetCtts`;
    return this.http.get<ResponseResult<CttElet[]>>(url).pipe(catchError(this.handleError));
  }

  public getWidgets(): Observable<ResponseResult<WidgetElet[]>> {
    const url = `${this.baseUrl}/GetWidgetList`;
    return this.http.get<ResponseResult<WidgetElet[]>>(url).pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    const msg = `${error.status}  ${error.message}`
    return throwError(() => msg);
  }

}
