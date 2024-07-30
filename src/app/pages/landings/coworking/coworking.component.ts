import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import feather from 'feather-icons';

// types
import { Feature } from "../shared/landings.model";
import { SpaceOption, Statistics, Testimonial } from './coworking.model';

// data
import { FEATURES, SPACEOPTIONS, STATISTICS, TESTIMONIALS } from './data';

@Component({
  selector: 'app-landing-coworking',
  templateUrl: './coworking.component.html',
  styleUrls: ['./coworking.component.scss']
})
export class CoworkingComponent implements OnInit {

  statistics: Statistics[] = [];
  features: Feature[] = [];
  spaceOptions: SpaceOption[] = [];
  testimonials: Testimonial[] = [];

  constructor (private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular | Co-Working Space Landing Page");
    this._fetchData();
  }

  _fetchData(): void {
    this.statistics = STATISTICS;
    this.features = FEATURES;
    this.spaceOptions = SPACEOPTIONS;
    this.testimonials = TESTIMONIALS;
  }

  ngAfterViewInit(): void {
    // feather icons
    feather.replace();
  }

}
