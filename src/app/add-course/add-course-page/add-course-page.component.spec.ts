import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AddCoursePageComponent } from './add-course-page.component';
import { CoursesService } from '../../courses/courses.service';

describe('AddCoursePageComponent', () => {
  let component: AddCoursePageComponent;
  let fixture: ComponentFixture<AddCoursePageComponent>;
  let coursesService: Partial<CoursesService>;
  let router: Partial<Router>;

  beforeEach(async(() => {
    coursesService = { createCourse: jasmine.createSpy('createCourse') };
    router = { navigate: jasmine.createSpy('navigate') };

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ AddCoursePageComponent ],
      providers: [
        {provide: CoursesService, useValue: coursesService},
        {provide: Router, useValue: router}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
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

  it('should redirect back to courses', () => {
    let button = fixture.debugElement.query(By.css('.btn-danger'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledWith(['/courses']);
  });

  it('should call createCourse', () => {
    let button = fixture.debugElement.query(By.css('.btn-primary'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(coursesService.createCourse).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/courses']);
  });

  // it('should receive creationDate', () => {
  //   component.onChangeDate('03/05/2018');
  //   expect(component.course.date).toEqual('03/05/2018')
  // });

  // it('should receive duration', () => {
  //   component.onChangeDuration(356);
  //   expect(component.course.length).toEqual(356)
  // });

  // it('should receive authors', () => {
  //   component.onChangeAuthor('David');
  //   expect(component.course.authors.length).toEqual(1)
  // });
});
