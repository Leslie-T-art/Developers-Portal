import { Component, Input, OnInit } from '@angular/core';

// types
import { AvatarItem } from 'src/app/docs/shared/docs.model';

@Component({
  selector: 'app-widget-blog-post-3',
  templateUrl: './blog-post-three.component.html',
  styleUrls: ['./blog-post-three.component.scss']
})
export class BlogPostThreeComponent implements OnInit {

  @Input() blogImg: string = "";
  @Input() badgeText: string = "";
  @Input() badgeVariant: string = "";
  @Input() blogTitle: string = "";
  @Input() avatarGroup: AvatarItem[] = [];
  @Input() overlayClass?: string;

  constructor () { }

  ngOnInit(): void {
  }

}
