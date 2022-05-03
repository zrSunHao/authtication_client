import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { NotifyService } from "../services/notify.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private hostSrv: AuthService, private notifySrv: NotifyService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return new Observable((observer) => {
            const sections = this.hostSrv.getSections();
            let flag = false;
            const permission: string = route.data["permission"]
            if (permission) flag = sections.findIndex(x => x === permission) >= 0;
            console.log(state.url, permission, flag);
            if (flag) {
                observer.next(true);
                observer.complete();
                return;
            }
            this.notifySrv.notify('权限不足', 'warning');
            observer.next(false);
            observer.complete();
        });
    }

}