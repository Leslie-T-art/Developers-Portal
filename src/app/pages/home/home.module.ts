import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { SwiperModule } from 'swiper/angular';

// module
import { NavbarsModule } from 'src/app/shared/navbars/navbars.module';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { HomeRoutingModule } from './home-routing.module';

// component
import { AccountPagesComponent } from './account-pages/account-pages.component';
import { CtaComponent } from './cta/cta.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home.component';
import { InnerPagesComponent } from './inner-pages/inner-pages.component';
import { LandingPagesComponent } from './landing-pages/landing-pages.component';




@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    FeaturesComponent,
    FooterComponent,
    CtaComponent,
    AccountPagesComponent,
    InnerPagesComponent,
    LandingPagesComponent
  ],
  imports: [
    CommonModule,
    NgxTypedJsModule,
    SwiperModule,
    NavbarsModule,
    UiModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
