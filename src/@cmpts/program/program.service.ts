import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment'
import { PagingParameter, ResponsePagingResult, ResponseResult } from 'src/@sun/models/paging.model';
import { FunctionElement, ProgramElement, ProgramSearchDto, SectionElement } from './model';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  private baseUrl = environment.hostUrl + 'program';
  private sectionUrl = environment.hostUrl + 'section';
  private functionUrl = environment.hostUrl + 'function';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  // ---------------- program ------------------

  public serach(param: PagingParameter<ProgramSearchDto>): Observable<ResponsePagingResult<ProgramElement>> {
    const url = `${this.baseUrl}/search`;
    return this.http.post<ResponsePagingResult<ProgramElement>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public add(param: ProgramElement): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/add`;
    return this.http.post<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public update(param: ProgramElement): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/update`;
    return this.http.post<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public delete(id: string): Observable<ResponseResult<boolean>> {
    const url = `${this.baseUrl}/delete?id=${id}`;
    return this.http.get<ResponseResult<boolean>>(url)
      .pipe(catchError(this.handleError));
  }

  // ---------------- section ------------------

  public getSections(programId: string): Observable<ResponseResult<SectionElement[]>> {
    const url = `${this.sectionUrl}/getList?programId=${programId}`;
    return this.http.get<ResponseResult<SectionElement[]>>(url)
      .pipe(catchError(this.handleError));
  }

  public addSection(param: SectionElement): Observable<ResponseResult<boolean>> {
    const url = `${this.sectionUrl}/add`;
    return this.http.post<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public updateSection(param: SectionElement): Observable<ResponseResult<boolean>> {
    const url = `${this.sectionUrl}/update`;
    return this.http.post<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public deleteSection(id: string): Observable<ResponseResult<boolean>> {
    const url = `${this.sectionUrl}/delete?id=${id}`;
    return this.http.get<ResponseResult<boolean>>(url)
      .pipe(catchError(this.handleError));
  }

  // ---------------- function ------------------

  public getFunctions(sectionId: string): Observable<ResponseResult<FunctionElement[]>> {
    const url = `${this.functionUrl}/getList?sectionId=${sectionId}`;
    return this.http.get<ResponseResult<FunctionElement[]>>(url)
      .pipe(catchError(this.handleError));
  }

  public addFunction(param: FunctionElement): Observable<ResponseResult<boolean>> {
    const url = `${this.functionUrl}/add`;
    return this.http.post<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public updateFunction(param: FunctionElement): Observable<ResponseResult<boolean>> {
    const url = `${this.functionUrl}/update`;
    return this.http.post<ResponseResult<boolean>>(url, param, this.httpOptions).pipe(catchError(this.handleError));
  }

  public deleteFunction(id: string): Observable<ResponseResult<boolean>> {
    const url = `${this.functionUrl}/delete?id=${id}`;
    return this.http.get<ResponseResult<boolean>>(url)
      .pipe(catchError(this.handleError));
  }

  // ---------------- private ------------------

  private handleError(error: HttpErrorResponse) {
    const msg = `${error.status}  ${error.message}`
    return throwError(() => msg);
  }

}
