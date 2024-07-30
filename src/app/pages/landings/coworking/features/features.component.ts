import { Component, Input, OnInit } from '@angular/core';

// types
import { Feature } from "../../shared/landings.model";

@Component({
  selector: 'app-coworking-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  @Input() features: Feature[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
