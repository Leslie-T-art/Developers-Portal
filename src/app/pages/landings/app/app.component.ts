import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import feather from 'feather-icons';

// types
import { Feature } from './app.model';

// data
import { FEATURES } from './data';

@Component({
  selector: 'app-landing-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  features2: Feature[] = [];

  constructor (private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular | Mobile Application Landing Page");
    this._fetchData()
  }

  ngAfterViewInit() {
    // feather icon
    feather.replace();
  }

  _fetchData(): void {
    this.features2 = [...FEATURES];
  }
}
