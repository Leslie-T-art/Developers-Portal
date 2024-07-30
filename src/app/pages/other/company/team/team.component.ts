import { Component, Input, OnInit } from '@angular/core';

// types
import { TeamMember } from '../company.model';

@Component({
  selector: 'app-company-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  @Input() teamMembers: TeamMember[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
