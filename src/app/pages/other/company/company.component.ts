import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import feather from 'feather-icons';

// types
import { Statistics, TeamMember } from './company.model';

// data
import { STATISTICS, TEAM } from './data';

@Component({
  selector: 'app-page-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  teamMembers: TeamMember[] = [];
  statistics: Statistics[] = [];

  constructor (private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular | About Company");
    this._fetchData();
  }

  ngAfterViewInit(): void {
    feather.replace();
  }

  /**
   * fetches data
   */
  _fetchData(): void {
    this.teamMembers = TEAM;
    this.statistics = STATISTICS;
  }

}
