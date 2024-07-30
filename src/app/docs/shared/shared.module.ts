import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// module
import { NavbarsModule } from 'src/app/shared/navbars/navbars.module';

// component
import { SidenavRightComponent } from './layout/sidenav-right/sidenav-right.component';
import { SidenavLeftComponent } from './layout/sidenav-left/sidenav-left.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    LayoutComponent,
    SidenavRightComponent,
    SidenavLeftComponent
  ],
  imports: [
    CommonModule,
    NavbarsModule,
    RouterModule
  ],
  exports: [LayoutComponent]
})
export class SharedModule { }
