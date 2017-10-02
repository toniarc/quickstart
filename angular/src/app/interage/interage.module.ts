import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HttpUtilService } from './util/httputil.service';

import { GlobalExcetionHandler } from './util/global.exception.handler';

import { AuthenticationGuard } from './security/authentication.guard';
import { AuthenticationService } from './security/authentication.service';
import { AuthenticationChildGuard } from './security/authentication.child.guard';


@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
    ],
    exports: [
    ],
    providers: [
        HttpUtilService,
        AuthenticationService,
        AuthenticationGuard,
        AuthenticationChildGuard,
        {provide: ErrorHandler, useClass: GlobalExcetionHandler}
    ]
})
export class InterageModule {

}