import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostThreeComponent } from './blog-post-three.component';

describe('BlogPostThreeComponent', () => {
  let component: BlogPostThreeComponent;
  let fixture: ComponentFixture<BlogPostThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
