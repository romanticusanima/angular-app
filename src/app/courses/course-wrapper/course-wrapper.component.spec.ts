import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseWrapperComponent } from './course-wrapper.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoursesService } from '../courses.service';
import { By } from "@angular/platform-browser";

describe('CourseWrapperComponent', () => {
  let component: CourseWrapperComponent;
  let fixture: ComponentFixture<CourseWrapperComponent>;

  let coursesService: Partial<CoursesService>;

  beforeEach(async(() => {
    coursesService = { getcourseItems: jasmine.createSpy('getcourseItems') };

    TestBed.configureTestingModule({
      declarations: [ CourseWrapperComponent ],
      providers: [{provide: CoursesService, useValue: coursesService}],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call servicee', () => {
    expect(coursesService.getcourseItems).toHaveBeenCalled();
  });
});
