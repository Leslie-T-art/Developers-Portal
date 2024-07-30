import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import feather from 'feather-icons';

// types
import { MenuItem } from '../shared/layout/layout.model';

@Component({
  selector: 'app-docs-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent implements OnInit {

  menuItems: MenuItem[] = [];


  constructor (private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular |  Documentation");

    this.menuItems = [
      {
        key: 'aos',
        label: 'AoS Animation'
      },
      {
        key: 'count-up',
        label: 'Countup'
      },
      {
        key: 'swiper',
        label: 'Swiper',
      }
    ]
  }


  ngAfterViewInit() {
    // feather icon
    feather.replace();
  }

}
