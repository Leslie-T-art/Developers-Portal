import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-docs-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  constructor (private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular |  Documentation");
  }

}
