import { Component, Input, OnInit } from '@angular/core';

// types
import { Project } from '../../shared/landings.model';

@Component({
  selector: 'app-portfolio-items',
  templateUrl: './portfolio-items.component.html',
  styleUrls: ['./portfolio-items.component.scss']
})
export class PortfolioItemsComponent implements OnInit {

  @Input() projects: Project[] = [];
  active: string = 'design';
  constructor () { }

  ngOnInit(): void {
  }

}
