import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import feather from 'feather-icons';
import { IAlbum } from 'ngx-lightbox';

// types
import { Benefit, Vacancy } from './career.model';

// data
import { IMAGES1 } from '../blog-post/data';
import { BENEFITS, VACANCIES } from './data';

@Component({
  selector: 'app-page-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  benifits: Benefit[] = [];
  vacancies: Vacancy[] = [];
  gallery: IAlbum[] = [];

  constructor (private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular | Career");
    this._fetchData();
  }

  ngAfterViewInit(): void {
    feather.replace();
  }

  /**
   * fetches data
   */
  _fetchData(): void {
    this.benifits = BENEFITS;
    this.vacancies = VACANCIES;
    this.gallery = IMAGES1;
  }

}
