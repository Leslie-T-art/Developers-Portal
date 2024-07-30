import { Component, OnInit } from '@angular/core';

// types
import { PricingPlan } from 'src/app/shared/widgets/pricing/pricing.model';

// data
import { PLANS } from '../../../shared/widgets/pricing/data';

@Component({
  selector: 'app-custom-pricing-cards',
  templateUrl: './pricing-cards.component.html',
  styleUrls: ['./pricing-cards.component.scss']
})
export class PricingCardsComponent implements OnInit {

  pricingPlans: PricingPlan[] = [];

  constructor () { }

  ngOnInit(): void {
    this._fetchData();
  }

  /**
   * Fetches the plans data
   */
  _fetchData() {
    this.pricingPlans = PLANS;
  }

}
