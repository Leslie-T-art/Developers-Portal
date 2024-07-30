import { Component, Input, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { SwiperOptions, Autoplay, Pagination } from 'swiper';

// types
import { AuthSlider } from '../slider.model';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

@Component({
  selector: 'app-widget-swiper-slider-1',
  templateUrl: './swiper-slider-one.component.html',
  styleUrls: ['./swiper-slider-one.component.scss']
})
export class SwiperSliderOneComponent implements OnInit {

  @Input() sliderItems: AuthSlider[] = [];
  config: SwiperOptions = {};

  constructor () { }

  ngOnInit(): void {
    this.config = {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 0,
      autoplay: { delay: 5000 },
      breakpoints: { 576: { slidesPerView: 1.2 }, 768: { slidesPerView: 1 } },
      roundLengths: true,
      pagination: {
        dynamicBullets: true
      }
    };
  }
}
