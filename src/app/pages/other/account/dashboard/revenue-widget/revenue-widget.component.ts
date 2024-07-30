import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-revenue-widget',
  templateUrl: './revenue-widget.component.html',
  styleUrls: ['./revenue-widget.component.scss']
})
export class DashboardRevenueWidgetComponent implements OnInit {

  @Input() revenue: number = 0;


  constructor () { }

  ngOnInit(): void {
  }

}
