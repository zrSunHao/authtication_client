import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment'
import { PagingParameter, ResponsePagingResult, ResponseResult } from 'src/@sun/models/paging.model';
import { FunctElet, PgmElet, PgmFilter, SectElet } from '../../@sun/models/program.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  private baseUrl = environment.hostUrl + 'program';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  // ---------------- program ------------------

  public serach(param: PagingParameter<PgmFilter>): Observable<ResponsePagingResult<PgmElet>> {
    const url = `${this.baseUrl}/GetList`;
    return this.http.post<any>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public add(param: PgmElet): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/Add`;
    return this.http.post<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public update(param: PgmElet): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/Update`;
    return this.http.patch<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public delete(id: string): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/delete?id=${id}`;
    return this.http.delete<ResponseResult<boolean>>(url)
      .pipe(catchError(this.handleError));
  }

  public test(): Observable<any> {
    const url = `${this.baseUrl}`;
    return this.http.get<any>(url)
      .pipe(catchError(this.handleError));
  }

  // ---------------- section ------------------

  public getSections(pgmId: string): Observable<ResponseResult<SectElet[]>> {
    const url = `${this.baseUrl}/GetSectList?pgmId=${pgmId}`;
    return this.http.get<ResponseResult<SectElet[]>>(url)
      .pipe(catchError(this.handleError));
  }

  public addSection(param: SectElet): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/addSect`;
    return this.http.post<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public updateSection(param: SectElet): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/updateSect`;
    return this.http.patch<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public deleteSection(id: string): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/deleteSect?id=${id}`;
    return this.http.delete<ResponseResult<boolean>>(url)
      .pipe(catchError(this.handleError));
  }

  // ---------------- function ------------------

  public getFunctions(sectId: string): Observable<ResponseResult<FunctElet[]>> {
    const url = `${this.baseUrl}/GetFunctList?sectId=${sectId}`;
    return this.http.get<ResponseResult<FunctElet[]>>(url)
      .pipe(catchError(this.handleError));
  }

  public addFunction(param: FunctElet): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/AddFunct`;
    return this.http.post<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public updateFunction(param: FunctElet): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/UpdateFunct`;
    return this.http.patch<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public deleteFunction(id: string): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/DeleteFunct?id=${id}`;
    return this.http.delete<ResponseResult<boolean>>(url)
      .pipe(catchError(this.handleError));
  }

  // ---------------- private ------------------

  private handleError(error: HttpErrorResponse) {
    const msg = `${error.status}  ${error.message}`
    return throwError(() => msg);
  }

}
