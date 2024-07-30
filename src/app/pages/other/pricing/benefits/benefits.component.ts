import { Component, Input, OnInit } from '@angular/core';

// types
import { Benefit } from '../pricing.model';

@Component({
  selector: 'app-pricing-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {

  @Input() benifits: Benefit[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
