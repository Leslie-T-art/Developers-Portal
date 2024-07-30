import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss']
})
export class NavTabsComponent implements OnInit {

  activeTab1: string = "home";
  activeTab2: string = "home";

  constructor () { }

  ngOnInit(): void {
  }

}
