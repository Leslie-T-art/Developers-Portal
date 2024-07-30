import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemHeroComponent } from './hero.component';

describe('ItemHeroComponent', () => {
  let component: ItemHeroComponent;
  let fixture: ComponentFixture<ItemHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemHeroComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
