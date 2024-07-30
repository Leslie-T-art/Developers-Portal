import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import feather from 'feather-icons';

// types
import { Project } from '../shared/landings.model';
import { BlogPost, JobDetail } from './agency.model';

// data
import { PROJECTS } from '../shared/data';
import { BLOGPOSTS, JOBS } from './data';

@Component({
  selector: 'app-landing-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss']
})
export class AgencyComponent implements OnInit {

  projects: Project[] = [];
  blogPosts: BlogPost[] = [];
  jobs: JobDetail[] = [];

  constructor (private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular | A Landing Page for an Agency");
    this._fetchData();
  }

  ngAfterViewInit(): void {
    // feather icons
    feather.replace();
  }

  _fetchData(): void {
    this.projects = PROJECTS;
    this.blogPosts = BLOGPOSTS;
    this.jobs = JOBS;
  }

}
