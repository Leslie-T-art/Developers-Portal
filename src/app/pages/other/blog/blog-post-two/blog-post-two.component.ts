import { Component, Input, OnInit } from '@angular/core';

// types
import { BlogPost } from '../blog.model';

@Component({
  selector: 'app-blog-post-2',
  templateUrl: './blog-post-two.component.html',
  styleUrls: ['./blog-post-two.component.scss']
})
export class BlogPostTwoComponent implements OnInit {

  @Input() blogPost?: BlogPost;

  constructor () { }

  ngOnInit(): void {
  }

}
