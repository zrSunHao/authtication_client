import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap, Observable } from 'rxjs';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpErrorResponse,
    HttpHeaderResponse,
    HttpResponse,
    HttpEvent,
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { NotifyService } from '../services/notify.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router,
        private authServ: AuthService,
        private notifyServ: NotifyService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = this.handleRequest(req);
        return next.handle(req).pipe(mergeMap(evt => this.handleResponse(evt)));
    }

    /**
     * 请求参数拦截处理
     * @param req 
     */
    handleRequest(req: HttpRequest<any>): HttpRequest<any> {
        const copyReq = req.clone({
            headers: req.headers
                .set('token', 'my-auth-token')
                .set('pgm', 'authentication_web')
                .set('sys', 'authentication_platform')
        });
        return copyReq;
    }

    handleResponse(evt: HttpEvent<any>): Observable<HttpEvent<any>> {
        return new Observable<HttpEvent<any>>(ob => {
            if (evt instanceof HttpResponse) {
                if (evt.status == 401) {
                    this.notifyServ.notify(`认证信息异常`, 'error')
                    this.router.navigate(['/security/login']);
                }
            }
            ob.next(evt);
        });
    }
}