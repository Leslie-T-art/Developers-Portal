import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import feather from 'feather-icons';
import { IAlbum } from 'ngx-lightbox';

// data
import { IMAGES1 } from './data';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  gallery: IAlbum[] = [];

  constructor (private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular | Blog Post");
    this._fetchData();
  }

  ngAfterViewInit(): void {
    feather.replace();
  }

  /**
   * fetches data
   */
  _fetchData(): void {
    this.gallery = IMAGES1;
  }

}
