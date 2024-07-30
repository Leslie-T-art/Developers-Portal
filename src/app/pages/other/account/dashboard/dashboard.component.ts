import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import feather from "feather-icons";

// service
import { AuthenticationService } from 'src/app/core/service/auth.service';

// types
import { User } from 'src/app/core/models/auth.models';
import { Project, Task } from './dashboard.model';

// data
import { PROJECTS, TASKS } from './data';

@Component({
  selector: 'app-pages-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loggedInUser: User | null = null;
  projects: Project[] = [];
  tasks: Task[] = [];

  constructor (
    private authService: AuthenticationService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular | Your Dashboard");
    this.loggedInUser = this.authService.currentUser();
    this._fetchData();
  }

  ngAfterViewInit(): void {
    feather.replace();
  }

  _fetchData(): void {
    this.projects = PROJECTS;
    this.tasks = TASKS;
  }

}
