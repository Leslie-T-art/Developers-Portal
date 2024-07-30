import { Component, OnInit } from '@angular/core';

// types
import { CountUpOptions } from 'countup.js';

type Statistics = {
  title: string;
  subTitle: string;
  stats: number;
  startWith: number;
  options: CountUpOptions;
}

@Component({
  selector: 'app-custom-count-up',
  templateUrl: './count-up.component.html',
  styleUrls: ['./count-up.component.scss']
})
export class CustomCountUpComponent implements OnInit {

  statistics: Statistics[] = [];

  constructor () { }

  ngOnInit(): void {
    this.statistics = [
      {
        title: 'Products Built',
        subTitle: 'helped clients across the globe',
        stats: 100,
        startWith: 10,
        options: {
          suffix: '+',
          duration: 5
        }
      },
      {
        title: 'Revenue Generated',
        subTitle: 'across 10+ countries',
        stats: 21,
        startWith: 5,
        options: {
          prefix: '$',
          suffix: 'M+',
          duration: 5
        }
      },
      {
        title: 'Satisfied Clients',
        subTitle: 'across 100+ locations',
        stats: 100,
        startWith: 10,
        options: {
          suffix: '+',
          duration: 5
        }
      },
      {
        title: 'Awards Won',
        subTitle: 'on Awwwards, CSS Design Awards',
        stats: 10,
        startWith: 1,
        options: {
          suffix: '+',
          duration: 5
        }
      },
    ]
  }

}
