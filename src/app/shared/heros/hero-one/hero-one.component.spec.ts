import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroOneComponent } from './hero-one.component';

describe('HeroOneComponent', () => {
  let component: HeroOneComponent;
  let fixture: ComponentFixture<HeroOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
