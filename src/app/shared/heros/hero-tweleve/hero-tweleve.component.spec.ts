import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTweleveComponent } from './hero-tweleve.component';

describe('HeroTweleveComponent', () => {
  let component: HeroTweleveComponent;
  let fixture: ComponentFixture<HeroTweleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroTweleveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTweleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
