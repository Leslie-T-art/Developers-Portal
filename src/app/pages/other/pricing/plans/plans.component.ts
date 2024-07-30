import { Component, Input, OnInit } from '@angular/core';

// data
import { PricingPlan } from 'src/app/shared/widgets/pricing/pricing.model';

@Component({
  selector: 'app-pricing-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  @Input() pricingPlans: PricingPlan[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
