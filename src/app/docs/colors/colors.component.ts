import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// types
import { Variant } from '../shared/docs.model';

@Component({
  selector: 'app-docs-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  colors: Variant[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];

  constructor (private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular |  Documentation");
  }

}
