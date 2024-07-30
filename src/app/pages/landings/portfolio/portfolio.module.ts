import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';

// module
import { SharedModule } from 'src/app/shared/shared.module';
import { PortfolioRoutingModule } from './portfolio-routing.module';

// component
import { CtaComponent } from './cta/cta.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioItemsComponent } from './portfolio-items/portfolio-items.component';
import { PortfolioComponent } from './portfolio.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';



@NgModule({
  declarations: [
    PortfolioComponent,
    ServicesComponent,
    PortfolioItemsComponent,
    TestimonialsComponent,
    CtaComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbNavModule,
    SwiperModule,
    SharedModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
