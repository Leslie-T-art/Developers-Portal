import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { first } from 'rxjs';
// types
import { User } from 'src/app/core/models/auth.models';
// service
import { AuthenticationService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });;
  formSubmitted: boolean = false;
  showPassword: boolean = false;
  loading: boolean = false;
  error: string = '';

  constructor (
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular |  Create a new account ");
  }

  /**
  * convenience getter for easy access to form fields
  */
  get formValues() {
    return this.signUpForm.controls;
  }


  /**
   * On form submit
   */
  onSubmit(): void {
    this.formSubmitted = true;
    if (this.signUpForm.valid) {
      this.loading = true;
      this.authenticationService.signup(this.formValues['name'].value, this.formValues['email'].value, this.formValues['password'].value)
        .pipe(first())
        .subscribe(
          (data: User) => {
            // navigates to confirm mail screen
            this.router.navigate(['/auth/confirm-account']);
          },
          (error: string) => {
            this.error = error;
            this.loading = false;
          });
    }
  }

}
