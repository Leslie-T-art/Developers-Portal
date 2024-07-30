import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNavigationComponent } from './navigation.component';

describe('ItemNavigationComponent', () => {
  let component: ItemNavigationComponent;
  let fixture: ComponentFixture<ItemNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemNavigationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
