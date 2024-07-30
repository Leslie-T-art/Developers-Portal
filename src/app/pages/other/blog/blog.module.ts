import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// module
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';

// component
import { BlogPostOneComponent } from './blog-post-one/blog-post-one.component';
import { BlogPostTwoComponent } from './blog-post-two/blog-post-two.component';
import { BlogComponent } from './blog.component';
import { HeroComponent } from './hero/hero.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';



@NgModule({
  declarations: [
    BlogComponent,
    HeroComponent,
    BlogPostOneComponent,
    BlogPostTwoComponent,
    SubscriptionFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
