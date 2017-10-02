import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routes';

import 'rxjs/add/operator/map';

import { MenuComponent } from './app-components/adminlte-components/menu/menu.component';
import { MenuItemComponent } from './app-components/adminlte-components/menu-item/menu-item.component';
import { MenuGroupComponent } from './app-components/adminlte-components/menu-group/menu-group.component';
import { MainComponent } from './app-components/adminlte-components/main/main.component';
import { PageHeader } from './app-components/adminlte-components/page-header/page-header.component';
import { PagerService } from './app-components/adminlte-components/datatable-pagination/pager.service';
import { DatatablePaginationComponent } from './app-components/adminlte-components/datatable-pagination/datatable-pagination.component';
import { PageHeaderService } from './app-components/adminlte-components/page-header/page-header.service';

import { HomeComponent } from './app-components/home/home.component';
import { LoginComponent } from './app-components/login/login.component';
import { PessoaListComponent } from './app-components/pessoa/pessoa.list.component';
import { PessoaFormComponent } from './app-components/pessoa/pessoa.form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InterageModule } from './interage/interage.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuItemComponent,
    MenuGroupComponent,
    MainComponent,
    PageHeader,
    DatatablePaginationComponent,
    LoginComponent,
    PessoaListComponent,
    PessoaFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    InterageModule
  ],
  providers: [
    PageHeaderService,
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
