import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSixComponent } from './hero-six.component';

describe('HeroSixComponent', () => {
  let component: HeroSixComponent;
  let fixture: ComponentFixture<HeroSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
