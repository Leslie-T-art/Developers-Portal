import { Component, Input, OnInit } from '@angular/core';

// types
import { Project } from '../../shared/landings.model';

@Component({
  selector: 'app-agency-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  @Input() projects: Project[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
