import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { PagerService } from './pager.service'

@Component({
    moduleId: module.id,
    selector: 'datatable-pagination',
    templateUrl: './datatable-pagination.component.html'
})
export class DatatablePaginationComponent {

    @Input() pager: any = {};

    @Output()
    pageChange: EventEmitter<number> = new EventEmitter();

    constructor() { }

    setPage(page: number){
        this.pageChange.emit(page);
    }

}