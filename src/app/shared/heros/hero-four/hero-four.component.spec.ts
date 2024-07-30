import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFourComponent } from './hero-four.component';

describe('HeroFourComponent', () => {
  let component: HeroFourComponent;
  let fixture: ComponentFixture<HeroFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
