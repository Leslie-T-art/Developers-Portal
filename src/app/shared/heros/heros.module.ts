import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxParallaxScrollModule } from 'ngx-parallax-scroll';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { SwiperModule } from 'swiper/angular';

// module
import { UiModule } from '../ui/ui.module';
import { WidgetsModule } from '../widgets/widgets.module';

// component
import { HeroEightComponent } from './hero-eight/hero-eight.component';
import { HeroElevenComponent } from './hero-eleven/hero-eleven.component';
import { HeroFiveComponent } from './hero-five/hero-five.component';
import { HeroFourComponent } from './hero-four/hero-four.component';
import { HeroNineComponent } from './hero-nine/hero-nine.component';
import { HeroOneComponent } from './hero-one/hero-one.component';
import { HeroSevenComponent } from './hero-seven/hero-seven.component';
import { HeroSixComponent } from './hero-six/hero-six.component';
import { HeroTenComponent } from './hero-ten/hero-ten.component';
import { HeroThreeComponent } from './hero-three/hero-three.component';
import { HeroTweleveComponent } from './hero-tweleve/hero-tweleve.component';
import { HeroTwoComponent } from './hero-two/hero-two.component';


@NgModule({
  declarations: [
    HeroOneComponent,
    HeroTwoComponent,
    HeroThreeComponent,
    HeroFourComponent,
    HeroFiveComponent,
    HeroSixComponent,
    HeroSevenComponent,
    HeroEightComponent,
    HeroNineComponent,
    HeroTenComponent,
    HeroElevenComponent,
    HeroTweleveComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxTypedJsModule,
    NgxParallaxScrollModule,
    SwiperModule,
    NgbDropdownModule,
    WidgetsModule,
    UiModule,
  ],
  exports: [
    HeroOneComponent,
    HeroTwoComponent,
    HeroThreeComponent,
    HeroFourComponent,
    HeroFiveComponent,
    HeroSixComponent,
    HeroSevenComponent,
    HeroEightComponent,
    HeroNineComponent,
    HeroTenComponent,
    HeroElevenComponent,
    HeroTweleveComponent
  ]
})
export class HerosModule { }
