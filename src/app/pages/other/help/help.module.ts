import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// modules
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { NavbarsModule } from 'src/app/shared/navbars/navbars.module';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';

// components
import { FaqsComponent } from './faqs/faqs.component';
import { HelpLinksComponent } from './help-links/help-links.component';
import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help.component';
import { HeroComponent } from './hero/hero.component';
import { SupportCenterComponent } from './support-center/support-center.component';



@NgModule({
  declarations: [
    HelpComponent,
    HeroComponent,
    HelpLinksComponent,
    SupportCenterComponent,
    FaqsComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    NavbarsModule,
    FooterModule,
    WidgetsModule,
    HelpRoutingModule
  ]
})
export class HelpModule { }
