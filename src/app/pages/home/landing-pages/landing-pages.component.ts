import { Component, Input, OnInit } from '@angular/core';

// types
import { Demo } from '../home.model';

@Component({
  selector: 'app-home-landing-pages-demo',
  templateUrl: './landing-pages.component.html',
  styleUrls: ['./landing-pages.component.scss']
})
export class LandingPagesComponent implements OnInit {

  @Input() landingDemos: Demo[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
