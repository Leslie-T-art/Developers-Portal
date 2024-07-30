import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// module
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { HerosModule } from 'src/app/shared/heros/heros.module';
import { NavbarsModule } from 'src/app/shared/navbars/navbars.module';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { SharedModule } from './shared/shared.module';
import { SaasRoutingModule } from './saas-routing.module';

// component
import { SaasClassicComponent } from './classic/classic.component';
import { SaasModernComponent } from './modern/modern.component';


@NgModule({
  declarations: [
    SaasClassicComponent,
    SaasModernComponent
  ],
  imports: [
    CommonModule,
    HerosModule,
    NavbarsModule,
    UiModule,
    FooterModule,
    SharedModule,
    SaasRoutingModule
  ]
})
export class SaasModule { }
