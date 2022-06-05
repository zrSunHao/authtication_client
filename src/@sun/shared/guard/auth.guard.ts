import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { NotifyService } from "../services/notify.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private hostSrv: AuthService,
        private notifySrv: NotifyService,
        private router: Router,) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return new Observable((observer) => {
            const sectCodes: string[] = this.hostSrv.getSections();
            let flag = false;
            const permission: string = route.data["permission"]
            if (permission) flag = sectCodes.findIndex(x => x === permission) >= 0;
            if (flag) {
                observer.next(true);
                observer.complete();
                return;
            }
            this.notifySrv.notify('权限不足', 'warning');
            observer.next(false);
            this.router.navigate([`/notfound/`]);
            observer.complete();
        });
    }

}