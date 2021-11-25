import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {SignInService} from "../../shared/services/sign-in.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private router: Router, private signInService: SignInService) {
  }

  private auth(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      let userInfoExist = this.signInService.userInfo.getValue();
      if (userInfoExist)
        resolve(true);
      else {
        this.signInService.userAuthorized().then((userData => {
            if (userData.valid) {
              resolve(true);
            } else {
              this.router.navigate(['/signIn']);
              resolve(false);
            }
          }
        ));
      }
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth();
  }
}
