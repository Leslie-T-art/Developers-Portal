import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTwoComponent } from './hero-two.component';

describe('HeroTwoComponent', () => {
  let component: HeroTwoComponent;
  let fixture: ComponentFixture<HeroTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
