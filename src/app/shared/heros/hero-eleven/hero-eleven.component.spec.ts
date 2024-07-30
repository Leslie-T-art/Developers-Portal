import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroElevenComponent } from './hero-eleven.component';

describe('HeroElevenComponent', () => {
  let component: HeroElevenComponent;
  let fixture: ComponentFixture<HeroElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroElevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
