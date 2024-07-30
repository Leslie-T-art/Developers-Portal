import { Component, OnInit } from '@angular/core';

interface BreadcrumbItem {
  label?: string;
  path?: string;
  active?: boolean;
}

@Component({
  selector: 'app-bootstrap-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbData: BreadcrumbItem[][] = [];

  constructor () { }

  ngOnInit(): void {
    this.breadcrumbData = [
      [
        { label: 'Home', path: '.', active: true }
      ],
      [
        { label: 'Home', path: '.' },
        { label: 'Library', path: '.', active: true }
      ]
    ]
  }

}
