import { AuthenticationService } from '../../interage/security/authentication.service';
import { Router } from '@angular/router';
import { Credentials } from './credentials'

export class ControleAcessoLogin {

    constructor(private auth: AuthenticationService, private router: Router) { }

    login(credentials: Credentials) {
        if (!this.auth.isUserLoggedIn()) {
            this.auth.login(credentials.login, credentials.password)
                .subscribe((isLoggedIn) => {
                    if (isLoggedIn) {
                        this.router.navigate(['/main/home']);
                        return;
                    }

                    this.router.navigate(['/login']);
                }, (error: Response) => {
                    if (error.status === 401) {
                        this.router.navigate(['/login']);
                    } else {
                        console.log('ocorreu um erro', error);
                    }

                });
        }

    }
}