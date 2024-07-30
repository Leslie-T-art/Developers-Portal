import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTestimonialsComponent } from './testimonials.component';

describe('ItemTestimonialsComponent', () => {
  let component: ItemTestimonialsComponent;
  let fixture: ComponentFixture<ItemTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemTestimonialsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
