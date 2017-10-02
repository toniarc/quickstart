import { Component } from '@angular/core';
import { PageHeaderService } from './page-header.service';
import { PageHeaderDto } from './pageheader.dto'

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeader {

  title: string;
  description: string;
  breadcrumb: string[];

  constructor(pgService: PageHeaderService) {
    pgService.pageReaderOnChange.subscribe( dto => this.onPageHeaderChange(dto));
  }

  onPageHeaderChange(dto: PageHeaderDto){
    this.title = dto.title;
    this.description = dto.description;
    this.breadcrumb = dto.breadcrumb;
  }
}
