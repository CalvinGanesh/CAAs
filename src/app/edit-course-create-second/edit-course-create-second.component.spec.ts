import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourseCreateSecondComponent } from './edit-course-create-second.component';

describe('EditCourseCreateSecondComponent', () => {
  let component: EditCourseCreateSecondComponent;
  let fixture: ComponentFixture<EditCourseCreateSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCourseCreateSecondComponent]
    });
    fixture = TestBed.createComponent(EditCourseCreateSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
