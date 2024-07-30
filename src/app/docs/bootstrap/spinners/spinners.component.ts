import { Component, Input, OnInit } from '@angular/core';

// types
import { Variant } from '../../shared/docs.model';

@Component({
  selector: 'app-bootstrap-spinners',
  templateUrl: './spinners.component.html',
  styleUrls: ['./spinners.component.scss']
})
export class SpinnersComponent implements OnInit {

  @Input() variants: Variant[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
