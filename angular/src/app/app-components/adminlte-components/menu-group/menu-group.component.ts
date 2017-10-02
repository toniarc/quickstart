import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu-group',
  templateUrl: './menu-group.component.html',
  styleUrls: ['./menu-group.component.css']
})
export class MenuGroupComponent implements OnInit {

  @Input() titulo: string;
  @Input() icone: string;
  
  constructor() { }

  ngOnInit() {
  }

}
