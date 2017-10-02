import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../interage/security/authentication.service';
import { AuthenticatedUser } from '../../../interage/security/authenticateduser';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{

  authenticatedUser: AuthenticatedUser;

  constructor(private auth: AuthenticationService) { 
    this.authenticatedUser = this.auth.getAuthenticatedUser();
  }

  hasRole(roleName): boolean {
    return this.auth.hasRole(roleName);
  }
}