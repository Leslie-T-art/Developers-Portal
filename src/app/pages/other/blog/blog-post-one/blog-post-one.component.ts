import { Component, Input, OnInit } from '@angular/core';

// types
import { BlogPost } from '../blog.model';

@Component({
  selector: 'app-blog-post-1',
  templateUrl: './blog-post-one.component.html',
  styleUrls: ['./blog-post-one.component.scss']
})
export class BlogPostOneComponent implements OnInit {

  @Input() blogPost?: BlogPost;
  @Input() cardClass?: string;
  @Input() cardBodyClass?: string;

  constructor () { }

  ngOnInit(): void {
  }

}
