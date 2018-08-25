import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fsa-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  btnLabel: string;

  constructor() { }

  ngOnInit() {
  }

}
