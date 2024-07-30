import { Component, OnInit } from '@angular/core';

// types
import { AvatarItem } from '../../shared/docs.model';

@Component({
  selector: 'app-custom-blog-items',
  templateUrl: './blog-items.component.html',
  styleUrls: ['./blog-items.component.scss']
})
export class BlogItemsComponent implements OnInit {

  avatarGroup: AvatarItem[] = [];

  constructor () { }

  ngOnInit(): void {
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
