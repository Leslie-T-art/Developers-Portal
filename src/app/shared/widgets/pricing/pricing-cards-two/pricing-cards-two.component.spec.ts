import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCardsTwoComponent } from './pricing-cards-two.component';

describe('PricingCardsTwoComponent', () => {
  let component: PricingCardsTwoComponent;
  let fixture: ComponentFixture<PricingCardsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingCardsTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingCardsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
