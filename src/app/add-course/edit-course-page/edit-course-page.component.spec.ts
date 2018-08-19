import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoursesService } from '../../courses/courses.service';
import { EditCoursePageComponent } from './edit-course-page.component';

describe('EditCoursePageComponent', () => {
  let component: EditCoursePageComponent;
  let fixture: ComponentFixture<EditCoursePageComponent>;
  let coursesService: Partial<CoursesService>;
  let router: Partial<Router>;

  beforeEach(async(() => {
    coursesService = { 
      updateCourse: jasmine.createSpy('updateCourse')
    };
    router = { navigate: jasmine.createSpy('navigate') };

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ EditCoursePageComponent ],
      providers: [
        {provide: CoursesService, useValue: coursesService},
        {provide: Router, useValue: router}
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
