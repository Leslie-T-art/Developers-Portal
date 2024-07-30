import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import feather from 'feather-icons';

// types
import { PricingPlan } from 'src/app/shared/widgets/pricing/pricing.model';
import { SliderItem } from 'src/app/shared/widgets/slider/slider.model';
import { Feature } from './software.model';

// data
import { SLIDES2 } from 'src/app/shared/widgets/slider/data';
import { FEATURES, PLANS } from './data';

@Component({
  selector: 'app-landing-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss']
})
export class SoftwareComponent implements OnInit {

  features: Feature[] = [];
  pricingPlans: PricingPlan[] = [];
  testimonialSlides: SliderItem[] = [];

  constructor (private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular | Software Landing Page");
    this._fetchData()
  }

  ngAfterViewInit() {
    // feather icon
    feather.replace();
  }

  /**
   * fetches data
   */
  _fetchData(): void {
    this.features = FEATURES;
    this.pricingPlans = PLANS;
    this.testimonialSlides = SLIDES2;
  }

}
