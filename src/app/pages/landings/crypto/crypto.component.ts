import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import feather from 'feather-icons';

// types
import { Feature } from '../shared/landings.model';
import { Blog, Coin } from './crypto.model';

// data
import { BLOGS, COINS, FEATURES } from './data';

@Component({
  selector: 'app-landing-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {

  coins: Coin[] = [];
  features: Feature[] = [];
  blogs: Blog[] = [];

  constructor (private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular | Crypto Landing Page");
    this._fetchData()
  }

  ngAfterViewInit() {
    // feather icon
    feather.replace();
  }

  /**
   * fetches data
   */
  _fetchData(): void {
    this.coins = COINS;
    this.features = FEATURES;
    this.blogs = BLOGS;
  }

}
