import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

// module
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';

// component
import { ClientsComponent } from './clients/clients.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FeatureOneComponent } from './feature-one/feature-one.component';
import { FeatureThreeComponent } from './feature-three/feature-three.component';
import { FeatureTwoComponent } from './feature-two/feature-two.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';



@NgModule({
  declarations: [
    FeatureOneComponent,
    FeatureTwoComponent,
    FeatureThreeComponent,
    ClientsComponent,
    FaqsComponent,
    TestimonialsComponent,
    PricingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbCollapseModule,
    WidgetsModule
  ],
  exports: [
    FeatureOneComponent,
    FeatureTwoComponent,
    FeatureThreeComponent,
    ClientsComponent,
    FaqsComponent,
    TestimonialsComponent,
    PricingComponent
  ]
})
export class SharedModule { }
