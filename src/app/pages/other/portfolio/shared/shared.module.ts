import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// module
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { NavbarsModule } from 'src/app/shared/navbars/navbars.module';
import { UiModule } from 'src/app/shared/ui/ui.module';

// component
import { PortfolioHeroComponent } from './hero/hero.component';
import { PortfolioLayoutComponent } from './portfolio-layout/portfolio-layout.component';


@NgModule({
  declarations: [
    PortfolioHeroComponent,
    PortfolioLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NavbarsModule,
    FooterModule,
    UiModule,
  ],
  exports: [
    PortfolioHeroComponent,
    PortfolioLayoutComponent
  ]
})
export class SharedModule { }
