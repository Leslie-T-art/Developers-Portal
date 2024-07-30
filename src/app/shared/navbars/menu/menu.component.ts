import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import feather from 'feather-icons';

// service
import { AuthenticationService } from 'src/app/core/service/auth.service';

// types
import { User } from 'src/app/core/models/auth.models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() navClass?: string;
  @Input() showDownload: boolean = true;
  @Input() ctaButtonClass: string = '';

  loggedInUser: User | null = null;

  constructor (
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.loggedInUser = this.authenticationService.currentUser();
  }

  /**
 * On view init - activating menuitems
 */
  ngAfterViewInit() {
    feather.replace();
  }

  /**
   * checks if path is segment of url 
   * @param path path of menu
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
