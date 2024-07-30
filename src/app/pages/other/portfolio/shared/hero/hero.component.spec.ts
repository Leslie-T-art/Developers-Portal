import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioHeroComponent } from './hero.component';

describe('PortfolioHeroComponent', () => {
  let component: PortfolioHeroComponent;
  let fixture: ComponentFixture<PortfolioHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioHeroComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
