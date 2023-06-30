import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourseCreateComponent } from './edit-course-create.component';

describe('EditCourseCreateComponent', () => {
  let component: EditCourseCreateComponent;
  let fixture: ComponentFixture<EditCourseCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCourseCreateComponent]
    });
    fixture = TestBed.createComponent(EditCourseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
