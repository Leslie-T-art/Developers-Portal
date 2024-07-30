import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFourComponent } from './navbar-four.component';

describe('NavbarFourComponent', () => {
  let component: NavbarFourComponent;
  let fixture: ComponentFixture<NavbarFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
