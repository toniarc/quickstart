import { RouterModule, Routes }     from '@angular/router';
import { AppComponent }             from './app.component';

import { MainComponent }            from './app-components/adminlte-components/main/main.component';

import { AuthenticationGuard }        from './interage/security/authentication.guard';
import { AuthenticationChildGuard }   from './interage/security/authentication.child.guard';

import { HomeComponent }         from './app-components/home/home.component';
import { LoginComponent }        from './app-components/login/login.component';

import { PessoaListComponent }    from './app-components/pessoa/pessoa.list.component';
import { PessoaFormComponent }    from './app-components/pessoa/pessoa.form.component';

const appRoutes: Routes = [
    {
        path: '', 
        component: LoginComponent
    },
    {
        path: 'login', 
        component: LoginComponent
    },
    {
        path: 'main',
        component: MainComponent,
        canActivate: [AuthenticationGuard],
        canActivateChild: [AuthenticationChildGuard],
        children:[
            {path: 'home', component: HomeComponent},
            {path: 'pessoa-list', component: PessoaListComponent},
            {path: 'pessoa-form', component: PessoaFormComponent},        
            {path: 'pessoa-form/:id', component: PessoaFormComponent},
            {path: '**', component: HomeComponent}        
        ]
    }
];

export const routing = RouterModule.forRoot(appRoutes);