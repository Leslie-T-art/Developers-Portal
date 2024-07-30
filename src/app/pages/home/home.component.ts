import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import feather from 'feather-icons';

// types
import { Demo, Feature } from './home.model';

// data
import { AUTHDEMOS, FEATURES, LANDINGDEMOS, PAGESDEMOS } from './data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  landingDemos: Demo[] = [];
  pagesDemos: Demo[] = [];
  authDemos: Demo[] = [];
  features: Feature[] = [];

  constructor (private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular | Premium Landing Pages");
    this._fetchData();
  }

  ngAfterViewInit() {
    // feather icon
    feather.replace();
  }

  _fetchData(): void {
    this.landingDemos = LANDINGDEMOS;
    this.pagesDemos = PAGESDEMOS;
    this.authDemos = AUTHDEMOS;
    this.features = FEATURES;
  }

}
