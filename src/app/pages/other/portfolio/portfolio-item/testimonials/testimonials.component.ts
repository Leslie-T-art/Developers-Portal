import { Component, Input, OnInit } from '@angular/core';

// type
import { SliderItem } from 'src/app/shared/widgets/slider/slider.model';

@Component({
  selector: 'app-portfolio-item-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class ItemTestimonialsComponent implements OnInit {

  @Input() sliderItems: SliderItem[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
