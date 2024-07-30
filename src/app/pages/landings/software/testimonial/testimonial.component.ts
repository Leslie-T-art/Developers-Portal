import { Component, Input, OnInit } from '@angular/core';

// types
import { SliderItem } from 'src/app/shared/widgets/slider/slider.model';

@Component({
  selector: 'app-software-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  @Input() testimonialSlides: SliderItem[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
