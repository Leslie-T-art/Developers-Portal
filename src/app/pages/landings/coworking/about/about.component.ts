import { Component, Input, OnInit } from '@angular/core';

// types
import { Statistics } from '../coworking.model';

@Component({
  selector: 'app-coworking-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() statistics: Statistics[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
