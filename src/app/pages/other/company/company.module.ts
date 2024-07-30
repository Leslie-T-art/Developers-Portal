import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CountUpModule } from 'ngx-countup';

// modules
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { HerosModule } from 'src/app/shared/heros/heros.module';
import { NavbarsModule } from 'src/app/shared/navbars/navbars.module';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { CompanyRoutingModule } from './company-routing.module';

// component
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { CompanyComponent } from './company.component';
import { FeaturesComponent } from './features/features.component';
import { StatsComponent } from './stats/stats.component';
import { TeamComponent } from './team/team.component';



@NgModule({
  declarations: [
    CompanyComponent,
    ClientsComponent,
    TeamComponent,
    StatsComponent,
    AboutComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    CountUpModule,
    HerosModule,
    NavbarsModule,
    FooterModule,
    UiModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
