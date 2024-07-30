import { Component, Input, OnInit } from '@angular/core';

// types
import { PricingPlan } from '../pricing.model';

@Component({
  selector: 'app-widget-pricing-cards-2',
  templateUrl: './pricing-cards-two.component.html',
  styleUrls: ['./pricing-cards-two.component.scss']
})
export class PricingCardsTwoComponent implements OnInit {

  @Input() pricingPlans: PricingPlan[] = [];
  @Input() containerClass?: string;

  constructor () { }

  ngOnInit(): void {
  }

}
