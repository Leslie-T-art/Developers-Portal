import { Component, Input, OnInit } from '@angular/core';

// types
import { Notification, ProfileOption, TopNavItem } from './navbar-four.model';

// data
import { NOTIFICATIONS, PROFILEOPTIONS, TOPMENU } from './data';

@Component({
  selector: 'app-navbar-4',
  templateUrl: './navbar-four.component.html',
  styleUrls: ['./navbar-four.component.scss']
})
export class NavbarFourComponent implements OnInit {

  @Input() fixedWidth: boolean = false;
  @Input() navClass: string = '';
  @Input() sticky: boolean = false;

  topMenu: TopNavItem[] = []
  notifications: Notification[] = [];
  profileOptions: ProfileOption[] = [];

  showMobileMenu: boolean = false;

  constructor () { }

  ngOnInit(): void {
    this._fetchData();
  }

  /**
   * fetches data
   */
  _fetchData(): void {
    this.topMenu = TOPMENU;
    this.notifications = NOTIFICATIONS;
    this.profileOptions = PROFILEOPTIONS
  }

}
