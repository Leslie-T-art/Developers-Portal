import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperSliderTwoComponent } from './swiper-slider-two.component';

describe('SwiperSliderTwoComponent', () => {
  let component: SwiperSliderTwoComponent;
  let fixture: ComponentFixture<SwiperSliderTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperSliderTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperSliderTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
