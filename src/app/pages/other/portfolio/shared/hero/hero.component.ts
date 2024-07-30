import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class PortfolioHeroComponent implements OnInit {

  @Input() title: string = '';

  constructor () { }

  ngOnInit(): void {
  }

}
