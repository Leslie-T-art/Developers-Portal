import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostTwoComponent } from './blog-post-two.component';

describe('BlogPostTwoComponent', () => {
  let component: BlogPostTwoComponent;
  let fixture: ComponentFixture<BlogPostTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
