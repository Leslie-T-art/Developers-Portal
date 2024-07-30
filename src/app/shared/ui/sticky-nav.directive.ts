import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appStickyNav]'
})
export class StickyNavDirective {

  @HostListener('window:scroll') onWindowScroll() {
    const navbar = document.getElementById("sticky");
    if (navbar) {
      if (document.body.scrollTop >= 240 || document.documentElement.scrollTop >= 240) {
        navbar.classList.add("navbar-sticky");
      } else {
        navbar.classList.remove("navbar-sticky");
      }
    }
  }


}
