import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRevenueWidgetComponent } from './revenue-widget.component';

describe('DashboardRevenueWidgetComponent', () => {
  let component: DashboardRevenueWidgetComponent;
  let fixture: ComponentFixture<DashboardRevenueWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardRevenueWidgetComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRevenueWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
