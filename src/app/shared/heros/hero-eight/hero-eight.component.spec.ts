import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroEightComponent } from './hero-eight.component';

describe('HeroEightComponent', () => {
  let component: HeroEightComponent;
  let fixture: ComponentFixture<HeroEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
