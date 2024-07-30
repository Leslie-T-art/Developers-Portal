import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStatWidgetComponent } from './stat-widget.component';

describe('DashboardStatWidgetComponent', () => {
  let component: DashboardStatWidgetComponent;
  let fixture: ComponentFixture<DashboardStatWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardStatWidgetComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStatWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
