import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// module
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

// component
import { CtaComponent } from './cta/cta.component';
import { FeatureOneComponent } from './feature-one/feature-one.component';
import { FeatureTwoComponent } from './feature-two/feature-two.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    FeatureOneComponent,
    FeatureTwoComponent,
    TestimonialsComponent,
    CtaComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class AppModule { }
