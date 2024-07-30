import { Component, Input, OnInit } from '@angular/core';

// types
import { SpaceOption } from '../coworking.model';

@Component({
  selector: 'app-coworking-space-options',
  templateUrl: './space-options.component.html',
  styleUrls: ['./space-options.component.scss']
})
export class SpaceOptionsComponent implements OnInit {

  @Input() spaceOptions: SpaceOption[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
