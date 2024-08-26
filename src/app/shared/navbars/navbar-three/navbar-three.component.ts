import { Component, Input, OnInit } from '@angular/core';

// service
import { AuthenticationService } from 'src/app/core/service/auth.service';

// types
import { User } from 'src/app/core/models/auth.models';

interface ProfileOption {
  icon: string;
  label: string;
  redirectTo: string;
}

const PROFILEOPTIONS: ProfileOption[] = [
  {
    icon: 'user',
    label: 'Profile',
    redirectTo: '.',
  },
  {
    icon: 'settings',
    label: 'Settings',
    redirectTo: '/pages/account/settings',
  },
  {
    icon: 'aperture',
    label: 'Support',
    redirectTo: '.',
  },
  {
    icon: 'unlock',
    label: 'Sign Out',
    redirectTo: '/auth/logout',
  },
];

@Component({
  selector: 'app-navbar-3',
  templateUrl: './navbar-three.component.html',
  styleUrls: ['./navbar-three.component.scss']
})
export class NavbarThreeComponent implements OnInit {

  @Input() fixedWidth: boolean = false;
  @Input() sticky: boolean = false;
  @Input() navClass: string = '';
  @Input() ctaButtonClass: string = '';

  showMobileMenu: boolean = false;

  loggedInUser: User | null = null;
 
  profileOptions: ProfileOption[] = PROFILEOPTIONS;

  constructor (
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.loggedInUser = this.authenticationService.currentUser();
  }

}
