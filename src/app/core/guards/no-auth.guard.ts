import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import {SignInService} from "../../shared/services/sign-in.service";

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate, CanLoad {

  constructor(private router: Router, private signInService: SignInService) {
  }

  private auth(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      let uuid = localStorage.getItem('uuid');
      let token = localStorage.getItem('user-token');
      let auth = localStorage.getItem('auth');
      if (uuid && token && auth) {
        this.signInService.userAuthorized().then((userData => {
          if (userData && userData.valid) {
            resolve(false);
            this.router.navigate(['/home']);
          } else {
            this.router.navigate(['/signIn']);
            resolve(true);
          }
        }));
      } else {
        resolve(true)
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
