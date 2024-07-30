import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import feather from "feather-icons";

// types
import { SliderItem } from 'src/app/shared/widgets/slider/slider.model';
import { Project } from '../shared/landings.model';

// data
import { SLIDES2 } from 'src/app/shared/widgets/slider/data';
import { PROJECTS } from '../shared/data';

@Component({
  selector: 'app-landing-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects: Project[] = []
  sliderItems: SliderItem[] = [];

  constructor (private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular | Portfolio Page");
    this._fetchData();
  }

  ngAfterViewInit(): void {
    // feather icons
    feather.replace();
  }

  _fetchData(): void {
    this.projects = PROJECTS;
    this.sliderItems = SLIDES2;
  }
}
