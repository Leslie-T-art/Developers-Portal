import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-blog-post-1',
  templateUrl: './blog-post-one.component.html',
  styleUrls: ['./blog-post-one.component.scss']
})
export class BlogPostOneComponent implements OnInit {

  @Input() blogImg: string = "";
  @Input() badgeText: string = "";
  @Input() badgeVariant: string = "";
  @Input() blogTitle: string = "";
  @Input() description: string = "";
  @Input() blogFooter?: boolean = true;
  @Input() authorName?: string;
  @Input() postDate?: string;

  constructor () { }

  ngOnInit(): void {
  }

}
