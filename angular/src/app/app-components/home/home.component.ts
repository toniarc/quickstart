import { Component } from '@angular/core';
import { PageHeaderService } from '../adminlte-components/page-header/page-header.service';
import { PageHeaderDto } from '../adminlte-components/page-header/pageheader.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  pageHeader: PageHeaderDto;

  constructor(pgService: PageHeaderService) { 

    this.pageHeader = new PageHeaderDto();
    this.pageHeader.title = 'Página Inicial';
    this.pageHeader.description = 'Aplicação exemple Prodepa';
    this.pageHeader.breadcrumb = ['Home'];

    pgService.setPageHeader(this.pageHeader);
  }

}
