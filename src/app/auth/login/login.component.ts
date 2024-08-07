import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

// service
import { AuthenticationService } from 'src/app/core/service/auth.service';

// types
import { User } from 'src/app/core/models/auth.models';

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    email: ['quickpi@xplug.co.zw', [Validators.required, Validators.email]],
    password: ['test', Validators.required]
  });
  formSubmitted: boolean = false;
  error: string = '';
  returnUrl: string = '/pages/account/dashboard'; // Default redirect URL after login
  loading: boolean = false;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private titleService: Title,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("quickpi - Angular | Login into your account");
    // Optionally get return URL from route parameters
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || this.returnUrl;
  }

  /**
   * Convenience getter for easy access to form fields
   */
  get formValues() { return this.loginForm.controls; }

  /**
  * On submit form
  */
  onSubmit(): void {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      this.loading = true;
      this.authenticationService.login(this.formValues['email'].value, this.formValues['password'].value)
        .pipe(first())
        .subscribe(
          (data: User) => {
            this.router.navigate([this.returnUrl]); // Redirect to the dashboard after login
          },
          (error: string) => {
            this.error = error;
            this.loading = false;
          });
    }
  }

}
