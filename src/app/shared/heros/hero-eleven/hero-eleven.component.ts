import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-11',
  templateUrl: './hero-eleven.component.html',
  styleUrls: ['./hero-eleven.component.scss']
})
export class HeroElevenComponent implements OnInit {

  images: string[] = [];

  constructor () { }

  ngOnInit(): void {
    this._fetchData();
  }

  _fetchData(): void {
    this.images = [1, 2, 3].map((number) => `assets/images/hero/saas${number}.jpg`)
  }

}
