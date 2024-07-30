import { Component, Input, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { SwiperOptions, Navigation, Autoplay, } from 'swiper';

// types
import { Testimonial } from '../coworking.model';

// install Swiper modules
SwiperCore.use([Autoplay, Navigation]);

@Component({
  selector: 'app-coworking-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  config: SwiperOptions = {};
  @Input() testimonials: Testimonial[] = [];

  constructor () { }

  ngOnInit(): void {
    this.config = {
      loop: true,
      spaceBetween: 24,
      autoplay: { delay: 5000 },
      breakpoints: {
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 }
      },
      roundLengths: true,
      navigation: {
        nextEl: ".swiper-custom-next",
        prevEl: ".swiper-custom-prev"
      }
    }
  }

}
