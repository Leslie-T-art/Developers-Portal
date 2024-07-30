import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperSliderOneComponent } from './swiper-slider-one.component';

describe('SwiperSliderOneComponent', () => {
  let component: SwiperSliderOneComponent;
  let fixture: ComponentFixture<SwiperSliderOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperSliderOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperSliderOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
