import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTenComponent } from './hero-ten.component';

describe('HeroTenComponent', () => {
  let component: HeroTenComponent;
  let fixture: ComponentFixture<HeroTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
