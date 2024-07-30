import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';

// modules
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogPostRoutingModule } from './blog-post-routing.module';

// component
import { CommentsComponent } from './comments/comments.component';
import { HeroComponent } from './hero/hero.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PostContentComponent } from './post-content/post-content.component';
import { BlogPostComponent } from './blog-post.component';



@NgModule({
  declarations: [
    BlogPostComponent,
    HeroComponent,
    PostContentComponent,
    NavigationComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LightboxModule,
    NgbPopoverModule,
    SharedModule,
    BlogPostRoutingModule
  ]
})
export class BlogPostModule { }
