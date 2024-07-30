import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-portfolio-layout',
  templateUrl: './portfolio-layout.component.html',
  styleUrls: ['./portfolio-layout.component.scss']
})
export class PortfolioLayoutComponent implements OnInit {

  @Input() heroTitle: string = '';
  @Input() imageCategory: string = 'all';
  @Output() filterByCategory = new EventEmitter<string>();

  constructor () { }

  ngOnInit(): void {
  }

  filterImages(category: string): void {
    this.filterByCategory.emit(category);
  }

}
