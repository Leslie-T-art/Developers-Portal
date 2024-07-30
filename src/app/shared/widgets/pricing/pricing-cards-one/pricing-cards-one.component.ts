import { Component, Input, OnInit } from '@angular/core';

// types
import { PricingPlan } from '../pricing.model';

@Component({
  selector: 'app-widget-pricing-cards-1',
  templateUrl: './pricing-cards-one.component.html',
  styleUrls: ['./pricing-cards-one.component.scss']
})
export class PricingCardsOneComponent implements OnInit {

  @Input() pricingPlans: PricingPlan[] = [];
  @Input() containerClass?: string;
  @Input() hasAnimation?: boolean;

  constructor () { }

  ngOnInit(): void {
  }

}
