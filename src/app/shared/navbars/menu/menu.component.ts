import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import feather from 'feather-icons';

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
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  @Input() navClass?: string;
  @Input() showDownload: boolean = true;
  @Input() ctaButtonClass: string = '';

  loggedInUser: User | null = null;
  profileOptions: ProfileOption[] = PROFILEOPTIONS;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.loggedInUser = this.authenticationService.currentUser();
  }

  /**
   * On view init - activating menu items
   */
  ngAfterViewInit() {
    feather.replace();
  }

  /**
   * Checks if the path is a segment of the URL 
   * @param path path of the menu
   */
  isActive(path: string): boolean {
    return this.router.isActive(path, {
      matrixParams: 'ignored',
      queryParams: 'ignored',
      paths: 'subset',
      fragment: 'ignored'
    });
  }
}
