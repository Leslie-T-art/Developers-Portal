import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, SwiperOptions } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-home-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  config: SwiperOptions = {};
  sliderItems: string[] = [];

  constructor () { }

  ngOnInit(): void {
    this.sliderItems = [1, 2, 3].map((n) => `assets/images/hero/saas${n}.jpg`); 3
    this.config = {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 0,
      autoplay: true,
      breakpoints: {
        576: {
          slidesPerView: 1.2
        },
        768: {
          slidesPerView: 1
        }
      },
      roundLengths: true
    };
  }

}
