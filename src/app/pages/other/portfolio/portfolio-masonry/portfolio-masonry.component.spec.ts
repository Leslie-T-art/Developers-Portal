import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMasonryComponent } from './portfolio-masonry.component';

describe('PortfolioMasonryComponent', () => {
  let component: PortfolioMasonryComponent;
  let fixture: ComponentFixture<PortfolioMasonryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioMasonryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMasonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
