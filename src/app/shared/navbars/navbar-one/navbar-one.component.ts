import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-1',
  templateUrl: './navbar-one.component.html',
  styleUrls: ['./navbar-one.component.scss']
})
export class NavbarOneComponent implements OnInit {

  @Input() hideSearch: boolean = true;
  @Input() fixedWidth: boolean = false;
  @Input() sticky: boolean = false;
  @Input() navClass: string = '';
  @Input() ctaButtonClass: string = '';

  showMobileMenu: boolean = false;

  constructor () { }

  ngOnInit(): void {
  }

}
