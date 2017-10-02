import {Injectable, Output, EventEmitter} from '@angular/core';
import { PageHeaderDto } from './pageheader.dto'

@Injectable()
export class PageHeaderService {

    pageReaderOnChange: EventEmitter <PageHeaderDto> = new EventEmitter();
    pageHeaderDto: PageHeaderDto;

    setPageHeader(dto: PageHeaderDto){
        this.pageHeaderDto = dto;
        this.pageReaderOnChange.emit(this.pageHeaderDto);
    }
}