import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasModernComponent } from './modern.component';

describe('SaasModernComponent', () => {
  let component: SaasModernComponent;
  let fixture: ComponentFixture<SaasModernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaasModernComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaasModernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
