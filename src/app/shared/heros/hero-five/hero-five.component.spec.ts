import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFiveComponent } from './hero-five.component';

describe('HeroFiveComponent', () => {
  let component: HeroFiveComponent;
  let fixture: ComponentFixture<HeroFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
