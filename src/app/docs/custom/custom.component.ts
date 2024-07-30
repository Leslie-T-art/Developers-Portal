import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import feather from 'feather-icons';

// types
import { MenuItem } from '../shared/layout/layout.model';

@Component({
  selector: 'app-docs-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {


  menuItems: MenuItem[] = [];


  constructor (private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular |  Documentation");

    this.menuItems = [
      {
        key: 'avatars',
        label: 'Avatars'
      },
      {
        key: 'blog-cards',
        label: 'Blog Items'
      },
      {
        key: 'gallery',
        label: 'Gallery'
      },
      {
        key: 'icons',
        label: 'Icons',
      },
      {
        key: 'pricing-cards',
        label: 'Pricing Cards'
      }
    ]
  }


  ngAfterViewInit() {
    // feather icon
    feather.replace();
  }


}
