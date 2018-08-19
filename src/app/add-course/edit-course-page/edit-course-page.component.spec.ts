import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CoursesService } from '../../courses/courses.service';
import { EditCoursePageComponent } from './edit-course-page.component';

describe('EditCoursePageComponent', () => {
  let component: EditCoursePageComponent;
  let fixture: ComponentFixture<EditCoursePageComponent>;
  let coursesService: Partial<CoursesService>;
  let router: Partial<Router>;
  let activatedRoute;

  beforeEach(async(() => {
    coursesService = { 
      updateCourse: jasmine.createSpy('updateCourse'),
      getCourseById: jasmine.createSpy('getCourseById')
    };
    router = { navigate: jasmine.createSpy('navigate') };
    activatedRoute = { 
      params: {
        subscribe: (fn: (value: Params) => void) => fn({
            id: 1,
        }),
      }
    }

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ EditCoursePageComponent ],
      providers: [
        { provide: CoursesService, useValue: coursesService },
        { provide: Router, useValue: router },
        { provide: ActivatedRoute, useValue: activatedRoute }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCoursePageComponent);
    component = fixture.componentInstance;
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
    expect(coursesService.updateCourse).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/courses']);
  });
});
