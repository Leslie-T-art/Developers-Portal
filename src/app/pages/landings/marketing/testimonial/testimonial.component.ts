import { Component, Input, OnInit } from '@angular/core';

// types
import { SliderItem } from 'src/app/shared/widgets/slider/slider.model';

@Component({
  selector: 'app-marketing-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  @Input() sliderItems: SliderItem[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
