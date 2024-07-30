import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceOptionsComponent } from './space-options.component';

describe('SpaceOptionsComponent', () => {
  let component: SpaceOptionsComponent;
  let fixture: ComponentFixture<SpaceOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
