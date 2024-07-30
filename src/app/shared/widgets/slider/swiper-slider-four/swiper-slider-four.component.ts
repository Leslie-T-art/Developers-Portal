import { Component, Input, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { SwiperOptions, Navigation, Autoplay, } from 'swiper';

// types
import { SliderItem } from '../slider.model';

// install Swiper modules
SwiperCore.use([Autoplay, Navigation]);

@Component({
  selector: 'app-swiper-slider-4',
  templateUrl: './swiper-slider-four.component.html',
  styleUrls: ['./swiper-slider-four.component.scss']
})
export class SwiperSliderFourComponent implements OnInit {

  @Input() sliderItems: SliderItem[] = [];
  @Input() hasLogo?: boolean;
  config: SwiperOptions = {};

  constructor () { }

  ngOnInit(): void {
    this.config = {
      loop: true,
      spaceBetween: 24,
      autoplay: { delay: 5000 },
      breakpoints: {
        576: { slidesPerView: 1 },
        768: { slidesPerView: 1 }
      },
      roundLengths: true,
      navigation: {
        nextEl: ".swiper-custom-next",
        prevEl: ".swiper-custom-prev"
      }
    }
  }
}
