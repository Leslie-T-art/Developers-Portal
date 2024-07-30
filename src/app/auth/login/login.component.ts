import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

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
    email: ['prompt@coderthemes.com', [Validators.required, Validators.email]],
    password: ['test', Validators.required]
  });
  formSubmitted: boolean = false;
  error: string = '';
  returnUrl: string = '/';
  loading: boolean = false;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private titleService: Title,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular |  Login into your account");
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || this.returnUrl;
  }

  /**
   * convenience getter for easy access to form fields
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
            this.router.navigate([this.returnUrl]);
          },
          (error: string) => {
            this.error = error;
            this.loading = false;
          });
    }
  }

}
