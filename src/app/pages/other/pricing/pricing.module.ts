import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// modules
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { NavbarsModule } from 'src/app/shared/navbars/navbars.module';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';

// component
import { BenefitsComponent } from './benefits/benefits.component';
import { CtaComponent } from './cta/cta.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HeroComponent } from './hero/hero.component';
import { PlansComponent } from './plans/plans.component';
import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';



@NgModule({
  declarations: [
    PricingComponent,
    HeroComponent,
    PlansComponent,
    FaqsComponent,
    CtaComponent,
    BenefitsComponent
  ],
  imports: [
    CommonModule,
    NavbarsModule,
    FooterModule,
    UiModule,
    WidgetsModule,
    PricingRoutingModule
  ]
})
export class PricingModule { }
