import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';
import { NgxMasonryModule } from 'ngx-masonry';

// module
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { NavbarsModule } from 'src/app/shared/navbars/navbars.module';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';
import { SharedModule } from './shared/shared.module';
import { PortfolioRoutingModule } from './portfolio-routing.module';

// component
import { PortfolioGridComponent } from './portfolio-grid/portfolio-grid.component';
import { ItemContentComponent } from './portfolio-item/content/content.component';
import { ItemHeroComponent } from './portfolio-item/hero/hero.component';
import { ItemNavigationComponent } from './portfolio-item/navigation/navigation.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { ItemTestimonialsComponent } from './portfolio-item/testimonials/testimonials.component';
import { PortfolioMasonryComponent } from './portfolio-masonry/portfolio-masonry.component';




@NgModule({
  declarations: [
    PortfolioGridComponent,
    PortfolioMasonryComponent,
    PortfolioItemComponent,
    ItemHeroComponent,
    ItemContentComponent,
    ItemTestimonialsComponent,
    ItemNavigationComponent
  ],
  imports: [
    CommonModule,
    LightboxModule,
    NgxMasonryModule,
    NgbPopoverModule,
    WidgetsModule,
    NavbarsModule,
    FooterModule,
    UiModule,
    SharedModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
