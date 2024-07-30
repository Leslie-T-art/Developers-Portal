import { Component, Input, OnInit } from '@angular/core';

// types
import { Demo } from '../home.model';

@Component({
  selector: 'app-home-account-pages-demo',
  templateUrl: './account-pages.component.html',
  styleUrls: ['./account-pages.component.scss']
})
export class AccountPagesComponent implements OnInit {

  @Input() authDemos: Demo[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
