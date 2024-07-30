import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-saas-features-1',
  templateUrl: './feature-one.component.html',
  styleUrls: ['./feature-one.component.scss']
})
export class FeatureOneComponent implements OnInit {

  @Input() containerClass: string = '';
  tab1: boolean = false;
  tab2: boolean = true;
  tab3: boolean = true;

  constructor () { }

  ngOnInit(): void {
  }

}
