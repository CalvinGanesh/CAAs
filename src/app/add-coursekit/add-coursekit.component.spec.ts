import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoursekitComponent } from './add-coursekit.component';

describe('AddCoursekitComponent', () => {
  let component: AddCoursekitComponent;
  let fixture: ComponentFixture<AddCoursekitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCoursekitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCoursekitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
