import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() routerLink: string;
  @Input() rendered: boolean;
  @Input() titulo: string;

  constructor() { }

  ngOnInit() {
  }

}
