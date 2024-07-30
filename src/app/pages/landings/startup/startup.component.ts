import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import feather from 'feather-icons';

//types
import { Integration, PlanFeature } from './startup.model';

// data
import { INTEGRATIONS, PLANFEATURES } from './data';


@Component({
  selector: 'app-landing-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.scss']
})
export class StartupComponent implements OnInit {

  integrations: Integration[] = [];
  planFeatures: PlanFeature[] = [];

  constructor (private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular | Startup Landing Page");
    this._fetchData()
  }

  ngAfterViewInit() {
    // feather icon
    feather.replace();
  }


  /**
   * fetches data
   */
  _fetchData(): void {
    this.integrations = [...INTEGRATIONS];
    this.planFeatures = [...PLANFEATURES];
  }

}
