import { Component, Input, OnInit } from '@angular/core';

// types
import { SliderItem } from 'src/app/shared/widgets/slider/slider.model';

@Component({
  selector: 'app-saas-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  @Input() sliderItems: SliderItem[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
