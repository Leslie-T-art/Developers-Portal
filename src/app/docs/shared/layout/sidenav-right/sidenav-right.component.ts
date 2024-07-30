import { Component, Input, OnInit } from '@angular/core';

// types
import { MenuItem } from '../layout.model';

@Component({
  selector: 'app-sidenav-right',
  templateUrl: './sidenav-right.component.html',
  styleUrls: ['./sidenav-right.component.scss']
})
export class SidenavRightComponent implements OnInit {

  @Input() menuItems: MenuItem[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
