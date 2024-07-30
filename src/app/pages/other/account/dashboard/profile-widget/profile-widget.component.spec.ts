import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfileWidgetComponent } from './profile-widget.component';

describe('DashboardProfileWidgetComponent', () => {
  let component: DashboardProfileWidgetComponent;
  let fixture: ComponentFixture<DashboardProfileWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardProfileWidgetComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProfileWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
