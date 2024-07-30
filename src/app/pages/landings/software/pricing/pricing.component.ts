import { Component, Input, OnInit } from '@angular/core';

// types
import { PricingPlan } from 'src/app/shared/widgets/pricing/pricing.model';

@Component({
  selector: 'app-software-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  @Input() pricingPlans: PricingPlan[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
