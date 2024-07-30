import { Component, Input, OnInit } from '@angular/core';

// types
import { Feature } from '../home.model';

@Component({
  selector: 'app-home-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  @Input() features: Feature[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
