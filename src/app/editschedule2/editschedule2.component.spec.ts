import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editschedule2Component } from './editschedule2.component';

describe('Editschedule2Component', () => {
  let component: Editschedule2Component;
  let fixture: ComponentFixture<Editschedule2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Editschedule2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editschedule2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
