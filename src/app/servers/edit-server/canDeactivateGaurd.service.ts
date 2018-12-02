import { Observable } from "rxjs";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export interface CanComponentDeActivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;

}

export class CanDeActivateGaurd implements CanDeactivate<CanComponentDeActivate> {
  canDeactivate(component: CanComponentDeActivate, currentRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot, nextstate?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return component.canDeactivate();

  }
}
