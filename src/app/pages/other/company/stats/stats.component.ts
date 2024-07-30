import { Component, Input, OnInit } from '@angular/core';

// types
import { Statistics } from '../company.model';

@Component({
  selector: 'app-company-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  @Input() statistics: Statistics[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
