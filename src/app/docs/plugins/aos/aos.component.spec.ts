import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAosComponent } from './aos.component';

describe('CustomAosComponent', () => {
  let component: CustomAosComponent;
  let fixture: ComponentFixture<CustomAosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomAosComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
