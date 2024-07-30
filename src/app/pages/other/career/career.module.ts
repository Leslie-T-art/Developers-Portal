import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LightboxModule } from 'ngx-lightbox';

// modules
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { NavbarsModule } from 'src/app/shared/navbars/navbars.module';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { CareerRoutingModule } from './career-routing.module';

// component
import { BenefitsComponent } from './benefits/benefits.component';
import { CareerComponent } from './career.component';
import { CtaComponent } from './cta/cta.component';
import { CultureComponent } from './culture/culture.component';
import { HeroComponent } from './hero/hero.component';
import { OpeningsComponent } from './openings/openings.component';



@NgModule({
  declarations: [
    CareerComponent,
    HeroComponent,
    BenefitsComponent,
    CultureComponent,
    OpeningsComponent,
    CtaComponent
  ],
  imports: [
    CommonModule,
    LightboxModule,
    NavbarsModule,
    FooterModule,
    UiModule,
    CareerRoutingModule
  ]
})
export class CareerModule { }
