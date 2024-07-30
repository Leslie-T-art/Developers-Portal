import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-docs-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.scss']
})
export class NavbarsComponent implements OnInit {

  constructor (private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular |  Documentation");
  }
}
