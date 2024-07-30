import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-stat-widget',
  templateUrl: './stat-widget.component.html',
  styleUrls: ['./stat-widget.component.scss']
})
export class DashboardStatWidgetComponent implements OnInit {

  @Input() icon: string = '';
  @Input() variant: string = '';
  @Input() stats: number = 0;
  @Input() title: string = '';

  constructor () { }

  ngOnInit(): void {
  }

}
