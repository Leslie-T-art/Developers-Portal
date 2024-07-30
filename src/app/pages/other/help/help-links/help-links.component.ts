import { Component, Input, OnInit } from '@angular/core';

// types
import { HelpLink } from '../help.model';

@Component({
  selector: 'app-help-links',
  templateUrl: './help-links.component.html',
  styleUrls: ['./help-links.component.scss']
})
export class HelpLinksComponent implements OnInit {

  @Input() helpLinks: HelpLink[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
