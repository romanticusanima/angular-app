import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AddCoursePageComponent } from './add-course-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoursesService } from '../../courses/courses.service';

describe('AddCoursePageComponent', () => {
  let component: AddCoursePageComponent;
  let fixture: ComponentFixture<AddCoursePageComponent>;
  let coursesService: Partial<CoursesService>;
  let router: Partial<Router>;

  beforeEach(async(() => {
    coursesService = { 
      createCourse: jasmine.createSpy('createCourse')//.and.returnValue([]) 
    };
    router = { navigate: jasmine.createSpy('navigate') };

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ AddCoursePageComponent ],
      providers: [
        {provide: CoursesService, useValue: coursesService},
        {provide: Router, useValue: router}
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
