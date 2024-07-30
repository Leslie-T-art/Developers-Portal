import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import { SwiperModule } from 'swiper/angular';

// module
import { SharedModule } from 'src/app/shared/shared.module';
import { CoworkingRoutingModule } from './coworking-routing.module';

// component
import { AboutComponent } from './about/about.component';
import { CoworkingComponent } from './coworking.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { SpaceOptionsComponent } from './space-options/space-options.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


@NgModule({
  declarations: [
    CoworkingComponent,
    AboutComponent,
    FeaturesComponent,
    SpaceOptionsComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CountUpModule,
    SwiperModule,
    SharedModule,
    CoworkingRoutingModule
  ]
})
export class CoworkingModule { }
