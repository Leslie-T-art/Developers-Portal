import { Component, Input, OnInit } from '@angular/core';

// types
import { Vacancy } from '../career.model';

@Component({
  selector: 'app-career-openings',
  templateUrl: './openings.component.html',
  styleUrls: ['./openings.component.scss']
})
export class OpeningsComponent implements OnInit {

  @Input() vacancies: Vacancy[] = [];

  constructor () { }

  ngOnInit(): void {
  }

  filterByCategory(category: string): Vacancy[] {
    return this.vacancies.filter((vacancy) => vacancy.category === category);
  }

}
