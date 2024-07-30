import { Component, Input, OnInit } from '@angular/core';

// types
import { Integration } from '../startup.model';

@Component({
  selector: 'app-startup-integrations',
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.scss']
})
export class IntegrationsComponent implements OnInit {

  @Input() integrations: Integration[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
