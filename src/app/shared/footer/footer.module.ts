import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// component
import { FooterOneComponent } from './footer-one/footer-one.component';
import { FooterThreeComponent } from './footer-three/footer-three.component';
import { FooterTwoComponent } from './footer-two/footer-two.component';



@NgModule({
  declarations: [
    FooterOneComponent,
    FooterTwoComponent,
    FooterThreeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FooterOneComponent,
    FooterTwoComponent,
    FooterThreeComponent,
  ]
})
export class FooterModule { }
