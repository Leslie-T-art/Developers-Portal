import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-account-tab',
  templateUrl: './account-tab.component.html',
  styleUrls: ['./account-tab.component.scss']
})
export class AccountTabComponent implements OnInit {

  accountForm: FormGroup = this.fb.group({
    name: ['Greeva Navadiya', Validators.required],
    displayName: ['Greeva N'],
    email: ['greeva@coderthemes.com', [Validators.required, Validators.email]],
    phone: ['+1 254 024 5400', Validators.required],
    profileVisibility: ['public'],
    infoVisibility: ['public'],
  });

  formSubmitted: boolean = false;

  constructor (private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  /**
 * convenience getter for easy access to form fields
 */
  get formValues() { return this.accountForm.controls; }

  /**
  * On submit form
  */
  onSubmit(): void {
    this.formSubmitted = true;
  }

}
