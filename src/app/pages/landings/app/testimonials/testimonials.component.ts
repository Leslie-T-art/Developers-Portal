import { Component, OnInit } from '@angular/core';

// types
import { SliderItem } from 'src/app/shared/widgets/slider/slider.model';

// data
import { SLIDES2 } from 'src/app/shared/widgets/slider/data';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  testimonialSlides: SliderItem[] = [];

  constructor () { }

  ngOnInit(): void {
    this._fetchData();
  }

  _fetchData(): void {
    this.testimonialSlides = [...SLIDES2];
  }


}
