import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesFourComponent } from './features-four.component';

describe('FeaturesFourComponent', () => {
  let component: FeaturesFourComponent;
  let fixture: ComponentFixture<FeaturesFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
