import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';

import { AuthLayoutComponent } from './auth-layout/auth-layout.component';


@NgModule({
  declarations: [
    AuthLayoutComponent,
  ],
  imports: [
    CommonModule,
    WidgetsModule,
    RouterModule,
  ],
  exports: [AuthLayoutComponent]
})
export class SharedModule { }
