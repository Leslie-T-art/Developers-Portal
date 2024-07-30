import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-hero-10',
  templateUrl: './hero-ten.component.html',
  styleUrls: ['./hero-ten.component.scss']
})
export class HeroTenComponent implements OnInit {

  constructor () { }

  ngOnInit(): void {
    AOS.init();
  }

}
