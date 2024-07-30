import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Navigation, SwiperOptions } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Navigation]);

@Component({
  selector: 'app-hero-2',
  templateUrl: './hero-two.component.html',
  styleUrls: ['./hero-two.component.scss']
})
export class HeroTwoComponent implements OnInit {

  sliderItems: string[] = [];
  config: SwiperOptions = {};

  constructor () { }

  ngOnInit(): void {
    this.sliderItems = [2, 3, 4].map((num) => `assets/images/hero/coworking${num}.jpg`)
    this.config = {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      roundLengths: true,
      autoplay: { delay: 5000 },
      navigation: {
        nextEl: ".swiper-custom-next",
        prevEl: ".swiper-custom-prev"
      }
    }
  }

}
