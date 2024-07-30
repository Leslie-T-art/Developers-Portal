import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// module
import { SharedModule } from 'src/app/shared/shared.module';
import { MarketingRoutingModule } from './marketing-routing.module';

// component
import { FeaturesFourComponent } from './features-four/features-four.component';
import { FeaturesOneComponent } from './features-one/features-one.component';
import { FeaturesThreeComponent } from './features-three/features-three.component';
import { FeaturesTwoComponent } from './features-two/features-two.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { MarketingComponent } from './marketing.component';


@NgModule({
  declarations: [
    MarketingComponent,
    FeaturesOneComponent,
    FeaturesTwoComponent,
    FeaturesThreeComponent,
    FeaturesFourComponent,
    TestimonialComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MarketingRoutingModule
  ]
})
export class MarketingModule { }
