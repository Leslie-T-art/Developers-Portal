import { Component, Input, OnInit } from '@angular/core';

// types
import { Blog } from '../crypto.model';

@Component({
  selector: 'app-crypto-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  @Input() blogs: Blog[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
