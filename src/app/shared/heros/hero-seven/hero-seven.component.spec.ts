import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSevenComponent } from './hero-seven.component';

describe('HeroSevenComponent', () => {
  let component: HeroSevenComponent;
  let fixture: ComponentFixture<HeroSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
