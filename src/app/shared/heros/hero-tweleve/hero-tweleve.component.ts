import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-12',
  templateUrl: './hero-tweleve.component.html',
  styleUrls: ['./hero-tweleve.component.scss']
})
export class HeroTweleveComponent implements OnInit {

  images: string[] = [];

  constructor () { }

  ngOnInit(): void {
    this._fetchData();
  }

  /**
   * fetches data
   */
  _fetchData(): void {
    this.images = [1, 2, 3].map((number) => `assets/images/hero/saas${number}.jpg`)
  }

}
