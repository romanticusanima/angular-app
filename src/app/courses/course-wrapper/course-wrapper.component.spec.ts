import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseWrapperComponent } from './course-wrapper.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoursesService } from '../courses.service';
import { SharedModule } from '../../shared/shared.module';

describe('CourseWrapperComponent', () => {
  let component: CourseWrapperComponent;
  let fixture: ComponentFixture<CourseWrapperComponent>;

  let coursesService: Partial<CoursesService>;

  beforeEach(async(() => {
    coursesService = { 
      getCourseItems: jasmine.createSpy('getCourseItems').and.returnValue([]) 
    };

    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ CourseWrapperComponent ],
      providers: [{provide: CoursesService, useValue: coursesService}],
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
    expect(coursesService.getCourseItems).toHaveBeenCalled();
  });
});
