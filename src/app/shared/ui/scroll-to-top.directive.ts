import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollToTop]'
})
export class ScrollToTopDirective {

  @HostListener('window:scroll') onWindowScroll() {
    const btnTop = document.querySelector('.btn-back-to-top');
    if (btnTop) {
      if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        btnTop.classList.add('show');
      } else {
        btnTop.classList.remove('show');
      }
    }
  }

  @HostListener('click') onButtonClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }


}
