import { Component, OnInit } from '@angular/core';

// types
import { MenuItem } from '../layout.model';

// data
import { MENU_ITEMS } from './menu';

@Component({
  selector: 'app-sidenav-left',
  templateUrl: './sidenav-left.component.html',
  styleUrls: ['./sidenav-left.component.scss']
})
export class SidenavLeftComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor () { }

  ngOnInit(): void {
    this.menuItems = MENU_ITEMS;
  }

}
