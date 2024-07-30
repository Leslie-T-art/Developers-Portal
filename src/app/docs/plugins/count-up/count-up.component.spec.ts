import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCountUpComponent } from './count-up.component';

describe('CustomCountUpComponent', () => {
  let component: CustomCountUpComponent;
  let fixture: ComponentFixture<CustomCountUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomCountUpComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCountUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
