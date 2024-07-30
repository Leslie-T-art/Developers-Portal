import { Component, Input, OnInit } from '@angular/core';

// types
import { User } from 'src/app/core/models/auth.models';

@Component({
  selector: 'app-dashboard-profile-widget',
  templateUrl: './profile-widget.component.html',
  styleUrls: ['./profile-widget.component.scss']
})
export class DashboardProfileWidgetComponent implements OnInit {

  @Input() user: User | null = null;
  @Input() projectCompletion: number = 0;
  @Input() rating: number = 0;

  constructor () { }

  ngOnInit(): void {
  }

}
