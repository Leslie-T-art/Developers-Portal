import { Component, Input, OnInit } from '@angular/core';

// types
import { BlogPost } from '../agency.model';

@Component({
  selector: 'app-agency-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  @Input() blogPosts: BlogPost[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
