import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-2',
  templateUrl: './navbar-two.component.html',
  styleUrls: ['./navbar-two.component.scss']
})
export class NavbarTwoComponent implements OnInit {

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
