import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// directive
import { ScrollToTopDirective } from './scroll-to-top.directive';
import { StickyNavDirective } from './sticky-nav.directive';

// component
import { PreloaderComponent } from './preloader/preloader.component';



@NgModule({
  declarations: [
    PreloaderComponent,
    StickyNavDirective,
    ScrollToTopDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PreloaderComponent,
    StickyNavDirective,
    ScrollToTopDirective,
  ]
})
export class UiModule { }
