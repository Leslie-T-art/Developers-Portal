import { Component, Input, OnInit } from '@angular/core';
// types
import { JobDetail } from '../agency.model';

@Component({
  selector: 'app-agency-openings',
  templateUrl: './openings.component.html',
  styleUrls: ['./openings.component.scss']
})
export class OpeningsComponent implements OnInit {

  @Input() jobs: JobDetail[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
