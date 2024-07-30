import { Component, Input, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { SwiperOptions, Navigation, Autoplay, } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-swiper-slider-3',
  templateUrl: './swiper-slider-three.component.html',
  styleUrls: ['./swiper-slider-three.component.scss']
})
export class SwiperSliderThreeComponent implements OnInit {

  @Input() images: string[] = [];
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
