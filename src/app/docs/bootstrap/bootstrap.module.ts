import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbAccordionModule,
  NgbAlertModule,
  NgbCarouselModule,
  NgbDropdownModule,
  NgbModalModule,
  NgbNavModule,
  NgbPaginationModule,
  NgbPopoverModule,
  NgbProgressbarModule,
  NgbTooltipModule
} from '@ng-bootstrap/ng-bootstrap';

// module
import { SharedModule } from '../shared/shared.module';
import { BootstrapRoutingModule } from './bootstrap-routing.module';

// component
import { BootstrapComponent } from './bootstrap.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { FormsComponent } from './forms/forms.component';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { ModalsComponent } from './modals/modals.component';
import { ProgressbarsComponent } from './progressbars/progressbars.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { PopoversComponent } from './popovers/popovers.component';
import { TooltipsComponent } from './tooltips/tooltips.component';


@NgModule({
  declarations: [
    BootstrapComponent,
    AlertsComponent,
    AccordionsComponent,
    BadgesComponent,
    BreadcrumbComponent,
    ButtonsComponent,
    CardsComponent,
    CarouselComponent,
    DropdownsComponent,
    FormsComponent,
    NavTabsComponent,
    ModalsComponent,
    ProgressbarsComponent,
    PaginationComponent,
    SpinnersComponent,
    PopoversComponent,
    TooltipsComponent
  ],
  imports: [
    CommonModule,
    NgbAlertModule,
    NgbAccordionModule,
    NgbCarouselModule,
    NgbDropdownModule,
    NgbModalModule,
    NgbNavModule,
    NgbPaginationModule,
    NgbPopoverModule,
    NgbProgressbarModule,
    NgbTooltipModule,
    SharedModule,
    BootstrapRoutingModule
  ]
})
export class BootstrapModule { }
