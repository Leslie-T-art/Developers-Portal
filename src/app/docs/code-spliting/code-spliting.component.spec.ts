import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSplitingComponent } from './code-spliting.component';

describe('CodeSplitingComponent', () => {
  let component: CodeSplitingComponent;
  let fixture: ComponentFixture<CodeSplitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeSplitingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeSplitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
