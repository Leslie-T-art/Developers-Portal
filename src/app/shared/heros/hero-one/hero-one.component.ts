import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, SwiperOptions } from 'swiper';

// types
import { Slide } from '../heros.model';

// data
import { SLIDES } from '../data';

// install Swiper modules
SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-hero-1',
  templateUrl: './hero-one.component.html',
  styleUrls: ['./hero-one.component.scss']
})
export class HeroOneComponent implements OnInit {

  sliderItems: Slide[] = [...SLIDES];
  config: SwiperOptions = {};

  constructor () { }

  ngOnInit(): void {
    this.config = {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 0,
      autoplay: {
        delay: 5000
      },
      breakpoints: {
        576: { slidesPerView: 1.2 },
        768: { slidesPerView: 1 }
      },
      roundLengths: true
    }
  }


}
