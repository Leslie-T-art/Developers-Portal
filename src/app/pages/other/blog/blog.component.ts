import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import feather from "feather-icons";

// types
import { BlogPost } from './blog.model';

// data
import { BLOGPOSTS1, BLOGPOSTS2 } from './data';


type AvatarItem = {
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-page-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogPosts1: BlogPost[] = [];
  blogPosts2: BlogPost[] = [];
  tags: string[] = [];
  avatarGroup: AvatarItem[] = [];

  constructor (private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular | Blog");
    this._fetchData();
  }

  ngAfterViewInit(): void {
    feather.replace();
  }

  /**
   * fetches data
   */
  _fetchData(): void {
    this.tags = ['Business', 'Community', 'Announcement', 'Tutorials', 'Resources', 'Interview'];
    this.blogPosts1 = BLOGPOSTS1;
    this.blogPosts2 = BLOGPOSTS2;
    this.avatarGroup = [
      {
        name: 'user-1',
        avatar: 'assets/images/avatars/img-7.jpg'
      },
      {
        name: 'user-2',
        avatar: 'assets/images/avatars/img-2.jpg'
      },
      {
        name: 'user-3',
        avatar: 'assets/images/avatars/img-4.jpg'
      }
    ];
  }

}
