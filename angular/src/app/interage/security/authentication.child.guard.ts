import { Injectable } from '@angular/core';
import { Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationChildGuard implements CanActivateChild {

  private auth: AuthenticationService;

  constructor(private router: Router, auth: AuthenticationService) {
    this.auth = auth;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {

    if(state.url === '/main/routerLink'){
      return true;
    }

    if (this.auth.isUserLoggedIn()) {
      return this.auth.authorizePage(state.url).toPromise().then(isPageAuthorized => {
        if (isPageAuthorized) {
          return isPageAuthorized;
        } else {
          this.router.navigate(['/main/home']);
          return false;
        }

      });
    } else {
      return true;
    }

  }

}
