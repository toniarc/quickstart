import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PageHeaderService } from '../adminlte-components/page-header/page-header.service';
import { PageHeaderDto } from '../adminlte-components/page-header/pageheader.dto';
import { Pessoa } from './pessoa';

import { HttpUtilService } from '../../interage/util/httputil.service';
import { PagerService } from '../adminlte-components/datatable-pagination/pager.service'

@Component({
  selector: 'pessoa-list',
  templateUrl: './pessoa.list.component.html'
})
export class PessoaListComponent implements OnInit {

  pageHeader: PageHeaderDto;

  pager: any = {};
  totalItems: number;
  pagedItems: any[];

  itemsPerPage: number[] = [10, 25, 50];
  pageSize: number = 10;

  pessoa: Pessoa = new Pessoa();

  constructor(pgService: PageHeaderService, private httpUtil: HttpUtilService, private pagerService: PagerService, private router: Router) {

    this.pageHeader = new PageHeaderDto();
    this.pageHeader.title = 'Pesquisa de Pessoas';
    this.pageHeader.description = 'Formulário para pesquisa de pessoas';
    this.pageHeader.breadcrumb = ['Home', 'Pesquisar Pessoas'];

    pgService.setPageHeader(this.pageHeader);

  }

  ngOnInit() {
    this.search(1);
  }

  /************
    Paginação
  **************/
  onChangeItemsPerPage(itemsPerPage){
    this.pageSize = itemsPerPage;
    this.search(1);
  }

  onChangePage(event:number){
    this.search(event)
  }

  /************
    crud
  **************/
  search(page: number) {
    this.httpUtil.post('/pessoa/search?first='+page+'&maxResults=' + this.pageSize, this.pessoa).subscribe(result => {
      let response = result.json();
      this.totalItems = response.count;
      this.pagedItems = response.list;
      this.pager = this.pagerService.getPager(this.totalItems, page, this.pageSize);
    });
  }

}