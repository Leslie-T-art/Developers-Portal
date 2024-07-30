import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';
import { LightboxModule } from 'ngx-lightbox';

// module
import { HerosModule } from 'src/app/shared/heros/heros.module';
import { NavbarsModule } from 'src/app/shared/navbars/navbars.module';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';
import { SharedModule } from './shared/shared.module';
import { DocsRoutingModule } from './docs-routing.module';

// component
import { ChangeLogComponent } from './change-log/change-log.component';
import { CodeSplitingComponent } from './code-spliting/code-spliting.component';
import { ColorsComponent } from './colors/colors.component';
import { AvatarsComponent } from './custom/avatars/avatars.component';
import { BlogItemsComponent } from './custom/blog-items/blog-items.component';
import { CustomComponent } from './custom/custom.component';
import { GalleryComponent } from './custom/gallery/gallery.component';
import { IconsComponent } from './custom/icons/icons.component';
import { PricingCardsComponent } from './custom/pricing-cards/pricing-cards.component';
import { CustomizationComponent } from './customization/customization.component';
import { HerosComponent } from './heros/heros.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { CustomAosComponent } from './plugins/aos/aos.component';
import { CustomCountUpComponent } from './plugins/count-up/count-up.component';
import { PluginsComponent } from './plugins/plugins.component';
import { CustomSwiperComponent } from './plugins/swiper/swiper.component';
import { QuickStartComponent } from './quick-start/quick-start.component';
import { RoutingComponent } from './routing/routing.component';
import { TypographyComponent } from './typography/typography.component';




@NgModule({
  declarations: [
    IntroductionComponent,
    QuickStartComponent,
    CustomizationComponent,
    ChangeLogComponent,
    ColorsComponent,
    TypographyComponent,
    CustomComponent,
    PluginsComponent,
    NavbarsComponent,
    HerosComponent,
    AvatarsComponent,
    BlogItemsComponent,
    PricingCardsComponent,
    GalleryComponent,
    IconsComponent,
    CustomAosComponent,
    CustomCountUpComponent,
    CustomSwiperComponent,
    RoutingComponent,
    CodeSplitingComponent
  ],
  imports: [
    CommonModule,
    NgbAlertModule,
    CountUpModule,
    LightboxModule,
    NavbarsModule,
    HerosModule,
    WidgetsModule,
    SharedModule,
    DocsRoutingModule
  ]
})
export class DocsModule { }
