import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// module
import { SharedModule } from 'src/app/shared/shared.module';
import { AgencyRoutingModule } from './agency-routing.module';

// component
import { AgencyComponent } from './agency.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ClientsComponent } from './clients/clients.component';
import { FooterComponent } from './footer/footer.component';
import { OpeningsComponent } from './openings/openings.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [
    AgencyComponent,
    ServicesComponent,
    PortfolioComponent,
    ClientsComponent,
    BlogsComponent,
    OpeningsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AgencyRoutingModule
  ]
})
export class AgencyModule { }
