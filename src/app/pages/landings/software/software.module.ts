import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// module
import { SharedModule } from 'src/app/shared/shared.module';
import { SoftwareRoutingModule } from './software-routing.module';

// component
import { ClientsComponent } from './clients/clients.component';
import { FeaturesOneComponent } from './features-one/features-one.component';
import { FeaturesTwoComponent } from './features-two/features-two.component';
import { FooterComponent } from './footer/footer.component';
import { PricingComponent } from './pricing/pricing.component';
import { SoftwareComponent } from './software.component';
import { TestimonialComponent } from './testimonial/testimonial.component';


@NgModule({
  declarations: [
    SoftwareComponent,
    ClientsComponent,
    FeaturesOneComponent,
    FeaturesTwoComponent,
    PricingComponent,
    TestimonialComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SoftwareRoutingModule
  ]
})
export class SoftwareModule { }
