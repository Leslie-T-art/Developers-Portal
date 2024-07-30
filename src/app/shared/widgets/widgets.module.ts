import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';

// components
import { BlogPostOneComponent, BlogPostThreeComponent, BlogPostTwoComponent } from './blog';
import { FaqComponent } from './faq/faq.component';
import { FeatureWidgetComponent } from './feature-widget/feature-widget.component';
import { PricingCardsOneComponent, PricingCardsTwoComponent } from './pricing';
import { SwiperSliderOneComponent, SwiperSliderTwoComponent, SwiperSliderThreeComponent, SwiperSliderFourComponent } from './slider';


@NgModule({
  declarations: [
    BlogPostOneComponent,
    BlogPostTwoComponent,
    BlogPostThreeComponent,
    PricingCardsOneComponent,
    PricingCardsTwoComponent,
    FeatureWidgetComponent,
    SwiperSliderOneComponent,
    SwiperSliderTwoComponent,
    SwiperSliderThreeComponent,
    SwiperSliderFourComponent,
    FaqComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbAccordionModule,
    SwiperModule
  ],
  exports: [
    BlogPostOneComponent,
    BlogPostTwoComponent,
    BlogPostThreeComponent,
    PricingCardsOneComponent,
    PricingCardsTwoComponent,
    FeatureWidgetComponent,
    SwiperSliderOneComponent,
    SwiperSliderTwoComponent,
    SwiperSliderThreeComponent,
    SwiperSliderFourComponent,
    FaqComponent
  ]
})
export class WidgetsModule { }
