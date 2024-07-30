import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperSliderFourComponent } from './swiper-slider-four.component';

describe('SwiperSliderFourComponent', () => {
  let component: SwiperSliderFourComponent;
  let fixture: ComponentFixture<SwiperSliderFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperSliderFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperSliderFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
