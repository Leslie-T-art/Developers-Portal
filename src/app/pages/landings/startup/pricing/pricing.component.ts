import { Component, Input, OnInit } from '@angular/core';

// types
import { PlanFeature } from '../startup.model';

@Component({
  selector: 'app-startup-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  @Input() planFeatures: PlanFeature[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
