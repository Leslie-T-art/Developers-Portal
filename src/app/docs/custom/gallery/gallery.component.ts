import { Component, OnInit } from '@angular/core';
import { IAlbum, Lightbox } from 'ngx-lightbox';

// data
import { IMAGES1, IMAGES2 } from './data';


@Component({
  selector: 'app-custom-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  album1: IAlbum[] = [];
  album2: IAlbum[] = [];

  constructor (private _lightbox: Lightbox) { }

  ngOnInit(): void {
    this._fetchData();
  }

  /**
  * fetches albums of gallery
  */
  _fetchData(): void {
    this.album1 = IMAGES1;
    this.album2 = IMAGES2;
  }

  /**
    * open simple lightbox 
    * @param index image number
    */
  openSimpleLightbox(index: number): void {
    this._lightbox.open(this.album1, index, { fadeDuration: 0.1, resizeDuration: 0.1, wrapAround: true, showImageNumberLabel: true, disableScrolling: true, centerVertically: true });
  }

  /**
  * open grid lightbox 
  * @param index image number
  */
  openGridLightbox(index: number): void {
    this._lightbox.open(this.album2, index, { fadeDuration: 0.01, resizeDuration: 0.01, wrapAround: true, showImageNumberLabel: true, disableScrolling: true, centerVertically: true });
  }

  /**
   * close lightbox programmatically
   */
  close(): void {
    this._lightbox.close();
  }


}
