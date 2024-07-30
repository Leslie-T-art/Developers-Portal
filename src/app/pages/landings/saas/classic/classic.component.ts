import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import feather from 'feather-icons';

// types
import { PricingPlan } from 'src/app/shared/widgets/pricing/pricing.model';
import { SliderItem } from 'src/app/shared/widgets/slider/slider.model';
import { FAQItem } from 'src/app/shared/widgets/faq/faq.model';

// data
import { SLIDES2 } from 'src/app/shared/widgets/slider/data';
import { FAQS } from 'src/app/shared/widgets/faq/data';
import { PLANS } from '../shared/data';

@Component({
  selector: 'app-landing-saas-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss']
})
export class SaasClassicComponent implements OnInit {

  sliderItems: SliderItem[] = [];
  pricingPlans: PricingPlan[] = [];
  faqs: FAQItem[] = [];

  constructor (private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular | Saas Application Landing Page");
    this._fetchData();
  }

  _fetchData(): void {
    this.sliderItems = SLIDES2;
    this.pricingPlans = PLANS;
    this.faqs = FAQS;
  }

  ngAfterViewInit(): void {
    // feather icons
    feather.replace();
  }

}
