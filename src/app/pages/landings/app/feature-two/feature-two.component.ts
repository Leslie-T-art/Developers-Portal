import { Component, Input, OnInit } from '@angular/core';

// types
import { Feature } from '../app.model';

@Component({
  selector: 'app-features-2',
  templateUrl: './feature-two.component.html',
  styleUrls: ['./feature-two.component.scss']
})
export class FeatureTwoComponent implements OnInit {

  @Input() features: Feature[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
