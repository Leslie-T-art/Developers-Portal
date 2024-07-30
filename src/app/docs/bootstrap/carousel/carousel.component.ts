import { Component, OnInit } from '@angular/core';

// caption
interface CarouselCaptionSlide {
  slideTitle: string;
  image: string;
  subTitle: string;
}

@Component({
  selector: 'app-bootstrap-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carouselImages: string[] = [];
  caroselCaptionSlides: CarouselCaptionSlide[] = [];

  constructor () { }

  ngOnInit(): void {
    this.carouselImages = [1, 2, 3].map((n) => `assets/images/photos/${n}.jpg`);

    this.caroselCaptionSlides = [
      {
        slideTitle: 'First slide label',
        image: 'assets/images/photos/1.jpg',
        subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
      },
      {
        slideTitle: 'Second slide label',
        image: 'assets/images/photos/2.jpg',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        slideTitle: 'Third slide label',
        image: 'assets/images/photos/3.jpg',
        subTitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
      }
    ];
  }

}
