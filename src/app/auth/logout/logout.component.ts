import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// service
import { AuthenticationService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor (
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    authenticationService.logout();
    router.navigateByUrl('auth/login');
  }

  ngOnInit(): void {
  }

}
