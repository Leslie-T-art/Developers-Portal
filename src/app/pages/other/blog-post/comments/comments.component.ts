import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog-post-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  commentForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    subject: [''],
    message: ['', Validators.required]
  });
  formSubmitted: boolean = false;

  constructor (private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  /**
 * convenience getter for easy access to form fields
 */
  get formValues() { return this.commentForm.controls; }

  /**
  * On submit form
  */
  onSubmit(): void {
    this.formSubmitted = true;
  }

}
