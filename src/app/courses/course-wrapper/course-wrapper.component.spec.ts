import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseWrapperComponent } from './course-wrapper.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoursesService } from '../courses.service';
import { SharedModule } from '../../shared/shared.module';
import { AuthorizationService } from '../../core/authorization.service';

describe('CourseWrapperComponent', () => {
  let component: CourseWrapperComponent;
  let fixture: ComponentFixture<CourseWrapperComponent>;

  let coursesService: Partial<CoursesService>;
  let authorizationService: Partial<AuthorizationService>;

  beforeEach(async(() => {
    coursesService = { 
      getCourseItems: jasmine.createSpy('getCourseItems').and.returnValue([]) 
    };
    authorizationService = { login: jasmine.createSpy('isAuth') }; 

    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ CourseWrapperComponent ],
      providers: [
        {provide: CoursesService, useValue: coursesService},
        {provide: AuthorizationService, useValue: authorizationService}
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseWrapperComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call servicee', () => {
    fixture.detectChanges();
    expect(authorizationService.isAuth).toHaveBeenCalled();
   // expect(coursesService.getCourseItems).toHaveBeenCalled();
  });
});
