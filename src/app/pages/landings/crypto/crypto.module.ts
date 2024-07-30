import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CountUpModule } from 'ngx-countup';

// module
import { SharedModule } from 'src/app/shared/shared.module';
import { CryptoRoutingModule } from './crypto-routing.module';

// component
import { BlogsComponent } from './blogs/blogs.component';
import { CoinsComponent } from './coins/coins.component';
import { CryptoComponent } from './crypto.component';
import { FeaturesComponent } from './features/features.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { StatsComponent } from './stats/stats.component';


@NgModule({
  declarations: [
    CryptoComponent,
    CoinsComponent,
    FeaturesComponent,
    IntegrationsComponent,
    StatsComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule,
    CountUpModule,
    SharedModule,
    CryptoRoutingModule
  ]
})
export class CryptoModule { }
