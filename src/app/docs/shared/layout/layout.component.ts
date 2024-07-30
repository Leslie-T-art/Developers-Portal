import { Component, Input, OnInit } from '@angular/core';

// types
import { MenuItem } from './layout.model';

@Component({
  selector: 'app-docs-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @Input() rightMenuItems?: MenuItem[];
  @Input() leftbarClasses?: string;

  constructor () { }

  ngOnInit(): void {
  }

}
