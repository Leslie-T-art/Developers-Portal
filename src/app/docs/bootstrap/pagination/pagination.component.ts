import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  page1: number = 2;
  page2: number = 2;
  page3: number = 2;

  constructor () { }

  ngOnInit(): void {
  }

}
