import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesOneComponent } from './features-one.component';

describe('FeaturesOneComponent', () => {
  let component: FeaturesOneComponent;
  let fixture: ComponentFixture<FeaturesOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
