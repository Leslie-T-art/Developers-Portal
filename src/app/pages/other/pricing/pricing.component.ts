import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import feather from "feather-icons";

// types
import { Benefit } from './pricing.model';
import { FAQItem } from 'src/app/shared/widgets/faq/faq.model';
import { PricingPlan } from 'src/app/shared/widgets/pricing/pricing.model';

// data
import { FAQS } from 'src/app/shared/widgets/faq/data';
import { BENEFITS, PLANS } from './data';

@Component({
  selector: 'app-page-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  benifits: Benefit[] = [];
  pricingPlans: PricingPlan[] = [];
  faqs: FAQItem[] = [];

  constructor (private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular | Pricing Page");
    this._fetchData();
  }

  ngAfterViewInit(): void {
    feather.replace();
  }

  /**
   * fetches data
   */
  _fetchData(): void {
    this.benifits = BENEFITS;
    this.pricingPlans = PLANS;
    this.faqs = FAQS;
  }

}
