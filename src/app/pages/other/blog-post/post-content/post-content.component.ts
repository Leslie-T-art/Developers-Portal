import { Component, Input, OnInit } from '@angular/core';
import { IAlbum, Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-blog-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss']
})
export class PostContentComponent implements OnInit {


  @Input() gallery: IAlbum[] = [];

  constructor (private _lightbox: Lightbox) { }

  ngOnInit(): void {
  }

  /**
   * open lightbox 
   * @param index image number
   */
  openLightbox(index: number): void {
    this._lightbox.open(this.gallery, index, { fadeDuration: 0.1, resizeDuration: 0.1, wrapAround: true, showImageNumberLabel: true, disableScrolling: true, centerVertically: true });
  }

  /**
   * close lightbox programmatically
   */
  close(): void {
    this._lightbox.close();
  }

}
