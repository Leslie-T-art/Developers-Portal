import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// module
import { SharedModule } from 'src/app/shared/shared.module';
import { StartupRoutingModule } from './startup-routing.module';

// component
import { ClientsComponent } from './clients/clients.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { PricingComponent } from './pricing/pricing.component';
import { StartupComponent } from './startup.component';



@NgModule({
  declarations: [
    StartupComponent,
    FooterComponent,
    ClientsComponent,
    FeaturesComponent,
    IntegrationsComponent,
    PricingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StartupRoutingModule
  ]
})
export class StartupModule { }
