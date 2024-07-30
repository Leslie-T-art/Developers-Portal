import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-auth-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  resetPassswordForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });
  formSubmitted: boolean = false;
  successMessage?: string;

  constructor (
    private fb: FormBuilder,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular |  Forget Paassword");
  }

  /**
  * convenience getter for easy access to form fields
  */
  get formValues() {
    return this.resetPassswordForm.controls;
  }

  /**
   * On form submit
   */
  onSubmit(): void {
    this.formSubmitted = true;
    if (this.resetPassswordForm.valid) {
      this.successMessage = "We have sent you an email containing a link to reset your password";
    }
  }

}
