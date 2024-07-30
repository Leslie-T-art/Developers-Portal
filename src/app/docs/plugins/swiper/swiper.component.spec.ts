import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSwiperComponent } from './swiper.component';

describe('CustomSwiperComponent', () => {
  let component: CustomSwiperComponent;
  let fixture: ComponentFixture<CustomSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomSwiperComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
