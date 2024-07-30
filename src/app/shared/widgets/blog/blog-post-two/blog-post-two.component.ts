import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-blog-post-2',
  templateUrl: './blog-post-two.component.html',
  styleUrls: ['./blog-post-two.component.scss']
})
export class BlogPostTwoComponent implements OnInit {

  @Input() blogImg: string = "";
  @Input() badgeText: string = "";
  @Input() badgeVariant: string = "";
  @Input() blogTitle: string = "";
  @Input() description: string = "";
  @Input() authorName: string = "";
  @Input() autherAvatar: string = "";
  @Input() blogFooter?: boolean = true;
  @Input() postDate?: string;
  @Input() hashtag?: string;

  constructor () { }

  ngOnInit(): void {
  }

}
