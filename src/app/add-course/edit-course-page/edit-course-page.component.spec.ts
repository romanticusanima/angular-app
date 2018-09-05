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
      getCourseById: jasmine.createSpy('getCourseById').and.returnValue([
        {
          id: 1,
          title: 'Video Course #1',
          creationDate: new Date('03.02.2017'),
          duration: 80,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          top: true,
          author: 'Nick'
        }
      ])
    };
    router = { navigate: jasmine.createSpy('navigate') };
    activatedRoute = { 
      params: {
        subscribe: (fn: (value: Params) => void) => fn({
            id: 1
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

  it('should get course info', () => {
    component.ngOnInit();
    expect(coursesService.getCourseById).toHaveBeenCalled();
  });

  it('should redirect back to courses', () => {
    component.cancel();
    expect(router.navigate).toHaveBeenCalledWith(['/courses']);
  });

  it('should call createCourse', () => {
    component.updateCourse();
    expect(coursesService.updateCourse).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/courses']);
  });

  it('should receive creationDate', () => {
    component.onChangeDate('09/02/2018');
    expect(component.creationDate).toEqual('09/02/2018')
  });

  it('should receive duration', () => {
    component.onChangeDuration(263);
    expect(component.duration).toEqual(263)
  });

  it('should receive creationDate', () => {
    component.onChangeAuthor('Tommy');
    expect(component.author).toEqual('Tommy')
  });
});
