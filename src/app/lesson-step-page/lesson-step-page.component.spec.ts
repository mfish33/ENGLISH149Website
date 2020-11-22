import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonStepPageComponent } from './lesson-step-page.component';

describe('LessonStepPageComponent', () => {
  let component: LessonStepPageComponent;
  let fixture: ComponentFixture<LessonStepPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonStepPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonStepPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
