import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AuthenticationService } from '../../interage/security/authentication.service';
import { ControleAcessoLogin } from '../../interage/security/controleacessologin';
import { Router } from '@angular/router';
import { Credentials } from '../../interage/security/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends ControleAcessoLogin  {

  private credentials: Credentials;

  constructor(auth: AuthenticationService, router: Router) {
    super(auth, router);
   }

   onSubmit(){
     super.login(this.credentials);
   }

}
