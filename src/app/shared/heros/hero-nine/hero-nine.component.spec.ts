import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroNineComponent } from './hero-nine.component';

describe('HeroNineComponent', () => {
  let component: HeroNineComponent;
  let fixture: ComponentFixture<HeroNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
