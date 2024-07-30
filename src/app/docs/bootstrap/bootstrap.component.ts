import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import feather from 'feather-icons';

// types
import { MenuItem } from '../shared/layout/layout.model';
import { Variant } from '../shared/docs.model';

@Component({
  selector: 'app-docs-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss']
})
export class BootstrapComponent implements OnInit {

  menuItems: MenuItem[] = [];
  variants: Variant[] = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'orange',
    'dark'
  ];

  constructor (private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular |  Documentation");

    this.menuItems = [
      {
        key: 'alerts',
        label: 'Alerts'
      },
      {
        key: 'accordions',
        label: 'Accordions'
      },
      {
        key: 'badges',
        label: 'Badges'
      },
      {
        key: 'breadcrumb',
        label: 'Breadcrumb',
      },
      {
        key: 'buttons',
        label: 'Buttons'
      },
      {
        key: 'cards',
        label: 'Cards'
      },
      {
        key: 'carousel',
        label: 'Carousel'
      },
      {
        key: 'dropdowns',
        label: 'Dropdowns'
      },
      {
        key: 'forms',
        label: 'Form Elements'
      },
      {
        key: 'nav-tabs',
        label: 'Nav Tabs'
      },
      {
        key: 'modals',
        label: 'Modals'
      },
      {
        key: 'progressbars',
        label: 'Progress'
      },
      {
        key: 'pagination',
        label: 'Pagination'
      },
      {
        key: 'spinners',
        label: 'Spinners'
      },
      {
        key: 'offcanvas',
        label: 'Offcanvas'
      },
      {
        key: 'popovers',
        label: 'Popovers'
      },
      {
        key: 'tooltips',
        label: 'Tooltips'
      }
    ]
  }


  ngAfterViewInit() {
    // feather icon
    feather.replace();
  }

}
