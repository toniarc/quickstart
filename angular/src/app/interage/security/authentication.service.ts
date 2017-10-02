import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { AuthenticatedUser } from './authenticateduser';
import { HttpUtilService } from '../util/httputil.service';

@Injectable()
export class AuthenticationService {
    
    private isLoggedIn: boolean = false;
    private authUser: AuthenticatedUser;
    private allRoles;
    private userRoles;
    
    constructor(private http: HttpUtilService){
    }
    
    
    login(login: string, password: string): Observable<Boolean> {

        let authHeader:string = btoa(login + ':' + password);
        let headers: Map<string, string> = new Map();
        headers.set('Authorization', 'Basic ' + authHeader);

        return this.http.post('/auth/autorizar', {teste: 'teste'}, headers)
            .map(res => {
                let securityContext = res.json();
                this.authUser = securityContext.authenticatedUser;
                this.allRoles = securityContext.allRoles;
                this.userRoles = securityContext.userRoles;

                this.hasRole('PESSOA_PESQUISAR');

                if(this.isUserLoggedIn()){
                    return true;
                }
                return false;
            });
    }

    hasRole(role): boolean {

        let roleValue = this.getRoleValue(role);

        let userInRole = false;
        for(var i in this.userRoles) {
            if(this.userRoles[i] === roleValue){
                userInRole = true;
                break;
            }
        }
        return userInRole;
    }

    private getRoleValue(roleName){
        let roleValue = '';
        for(var i in this.allRoles){
            if(i === roleName){
                roleValue = this.allRoles[i];
                break;
            }
        } 
        return roleValue;
    }

    authorizePage(page: string): Observable<boolean> {
        return this.http
            .post('/auth/autorizar-pagina', page)
            .map(res => {
                let isPageAuthorized: boolean = res.json();
                return isPageAuthorized;
            });
    }
    
    isUserLoggedIn(): boolean {
        return this.authUser != null && this.authUser.id != null;
    }

    getAuthenticatedUser(): AuthenticatedUser {
        return this.authUser;
    }
    
}