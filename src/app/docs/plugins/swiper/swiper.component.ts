import { Component, OnInit } from '@angular/core';

// types
import { AuthSlider } from 'src/app/shared/widgets/slider/slider.model';

// data
import { SLIDES1 } from 'src/app/shared/widgets/slider/data';

@Component({
  selector: 'app-custom-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class CustomSwiperComponent implements OnInit {

  sliderItems: AuthSlider[] = SLIDES1;

  constructor () { }

  ngOnInit(): void {
  }

}
