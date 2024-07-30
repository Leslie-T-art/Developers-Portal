import { Component, Input, OnInit } from '@angular/core';

// service
import { AuthenticationService } from 'src/app/core/service/auth.service';

// types
import { User } from 'src/app/core/models/auth.models';

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

  constructor (
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.loggedInUser = this.authenticationService.currentUser();
  }

}
