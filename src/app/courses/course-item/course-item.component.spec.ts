import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { CourseItemComponent } from './course-item.component';
import { ElementRef } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CoursesService } from '../courses.service';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  //let button: ElementRef;
  let coursesService: Partial<CoursesService>;

  beforeEach(async(() => {
    coursesService = { 
      removeCourse: jasmine.createSpy('removeCourse').and.returnValue([])
    };

    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ CourseItemComponent ],
      providers: [{provide: CoursesService, useValue: coursesService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    //button = fixture.debugElement.query(By.css('.b-delete'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('deleteItem', () => {
    it('method removeCourse should be called', () => {
      fixture.detectChanges();
      expect(coursesService.removeCourse).toHaveBeenCalled();
    });
  })
});
