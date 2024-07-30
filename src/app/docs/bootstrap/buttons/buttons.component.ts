import { Component, Input, OnInit } from '@angular/core';

// types
import { Variant } from '../../shared/docs.model';

// button variant type
type ButtonVariant = Variant | 'link' | 'white'

@Component({
  selector: 'app-bootstrap-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Input() variants: Variant[] = [];
  buttonVariants1: ButtonVariant[] = [];
  buttonVariants2: ButtonVariant[] = [];


  constructor () { }

  ngOnInit(): void {
    this.buttonVariants1 = [...this.variants, 'link'];
    this.buttonVariants2 = [...this.variants, 'link', 'white'];
  }

}
