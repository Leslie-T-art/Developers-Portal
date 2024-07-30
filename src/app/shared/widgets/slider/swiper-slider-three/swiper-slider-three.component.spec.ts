import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperSliderThreeComponent } from './swiper-slider-three.component';

describe('SwiperSliderThreeComponent', () => {
  let component: SwiperSliderThreeComponent;
  let fixture: ComponentFixture<SwiperSliderThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperSliderThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperSliderThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
