import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  
  private auth: AuthenticationService;
  
  constructor(private router: Router, auth: AuthenticationService) { 
    this.auth = auth;
  }
  
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|boolean {
    
      if(!this.auth.isUserLoggedIn()){
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    
    }
}