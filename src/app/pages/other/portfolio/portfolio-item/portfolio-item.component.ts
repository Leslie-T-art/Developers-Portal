import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import feather from 'feather-icons';

// types
import { SliderItem } from 'src/app/shared/widgets/slider/slider.model';

// data
import { SLIDES2 } from 'src/app/shared/widgets/slider/data';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {

  sliderItems: SliderItem[] = [];

  constructor (private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular | Portfolio Item");
    this._fetchData();
  }

  ngAfterViewInit(): void {
    feather.replace()
  }


  /**
   * fetches data
   */
  _fetchData(): void {
    this.sliderItems = SLIDES2;
  }

}
