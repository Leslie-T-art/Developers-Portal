import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketing-features-3',
  templateUrl: './features-three.component.html',
  styleUrls: ['./features-three.component.scss']
})
export class FeaturesThreeComponent implements OnInit {

  features: string[] = ['Unlimited Campaigns', 'Detailed Reporting', 'Auto Schedule Tuning', 'Smart Analytics', 'Notifications'];

  constructor () { }

  ngOnInit(): void {
  }

}
