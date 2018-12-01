import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "./auth.service";


@Injectable()

export class AuthGaurd implements CanActivate, CanActivateChild {

  constructor(private myAuthService: AuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.myAuthService.isAuthenciatedUser().then(
      (isAuthenticatedUser: boolean) => {
        if (isAuthenticatedUser) {
          return true;
        } else {
          this.router.navigate(['/']);
        }
      }
    )
  }

  canActivateChild(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, routerState);
  }
}
