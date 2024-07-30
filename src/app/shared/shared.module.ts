import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// modules
import { FooterModule } from './footer/footer.module';
import { HerosModule } from './heros/heros.module';
import { NavbarsModule } from './navbars/navbars.module';
import { UiModule } from './ui/ui.module';
import { WidgetsModule } from './widgets/widgets.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HerosModule,
    NavbarsModule,
    UiModule,
    WidgetsModule,
    FooterModule,
  ]
})
export class SharedModule { }
