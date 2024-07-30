import { Component, Input, OnInit } from '@angular/core';

// types
import { Demo } from '../home.model';

@Component({
  selector: 'app-home-inner-pages-demo',
  templateUrl: './inner-pages.component.html',
  styleUrls: ['./inner-pages.component.scss']
})
export class InnerPagesComponent implements OnInit {

  @Input() pagesDemos: Demo[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
