import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import feather from 'feather-icons';
import { IAlbum, Lightbox } from 'ngx-lightbox';

// types
import { GalleryItem } from '../shared/portfolio.model';

// data
import { MASONARYGALLERY } from '../shared/data';


@Component({
  selector: 'app-portfolio-masonry',
  templateUrl: './portfolio-masonry.component.html',
  styleUrls: ['./portfolio-masonry.component.scss']
})
export class PortfolioMasonryComponent implements OnInit {

  galleryItems: GalleryItem[] = [];
  imageCategory: string = 'all';
  private _albums: IAlbum[] = [];

  constructor (
    private titleService: Title,
    private _lightbox: Lightbox
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("quicKPI");
    this._fetchData();
  }

  ngAfterViewInit(): void {
    feather.replace()
  }

  _fetchData(): void {
    this._albums = [];
    this.galleryItems = this.imageCategory === 'all' ? MASONARYGALLERY : MASONARYGALLERY.filter((item) => item.category?.includes(this.imageCategory));
    this.galleryItems.forEach(item => this._albums.push(item.image!));
  }

  /**
  * open lightbox
  * @param index image number
  */
  open(index: number): void {
    this._lightbox.open(this._albums, index, { fadeDuration: 0.1, resizeDuration: 0.1, wrapAround: true, showImageNumberLabel: true, disableScrolling: true, centerVertically: true });
  }

  /**
   * close lightbox programmatically
   */
  close(): void {
    this._lightbox.close();
  }

  /**
   * filter images by category
   * @param category category
   */
  filterImages(category: string) {
    this.imageCategory = category;
    this._fetchData();
  }

}
