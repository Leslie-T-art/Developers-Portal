import { Component, Input, OnInit } from '@angular/core';

// types
import { Task } from '../dashboard.model';

@Component({
  selector: 'app-dashboard-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  @Input() tasks: Task[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
