import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasClassicComponent } from './classic.component';

describe('SaasClassicComponent', () => {
  let component: SaasClassicComponent;
  let fixture: ComponentFixture<SaasClassicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaasClassicComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaasClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
