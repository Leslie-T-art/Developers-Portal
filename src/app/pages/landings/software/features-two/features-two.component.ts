import { Component, Input, OnInit } from '@angular/core';

// types
import { Feature } from '../software.model';

@Component({
  selector: 'app-software-features-2',
  templateUrl: './features-two.component.html',
  styleUrls: ['./features-two.component.scss']
})
export class FeaturesTwoComponent implements OnInit {

  @Input() features: Feature[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
