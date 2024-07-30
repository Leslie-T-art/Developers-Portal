import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCardsOneComponent } from './pricing-cards-one.component';

describe('PricingCardsOneComponent', () => {
  let component: PricingCardsOneComponent;
  let fixture: ComponentFixture<PricingCardsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingCardsOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingCardsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
