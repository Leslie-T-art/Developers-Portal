import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import feather from "feather-icons";

// types
import { SliderItem } from 'src/app/shared/widgets/slider/slider.model';

// data
import { SLIDES2 } from 'src/app/shared/widgets/slider/data';

@Component({
  selector: 'app-landing-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {

  sliderItems: SliderItem[] = [];

  constructor (private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular | Marketing Landing Page");
    this._fetchData()
  }

  ngAfterViewInit() {
    // feather icon
    feather.replace();
  }

  _fetchData(): void {
    this.sliderItems = SLIDES2;
  }

}
