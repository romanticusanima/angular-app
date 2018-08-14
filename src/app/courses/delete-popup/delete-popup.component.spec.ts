import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DeletePopupComponent } from './delete-popup.component';
import { CoursesService } from '../courses.service';

describe('DeletePopupComponent', () => {
  let component: DeletePopupComponent;
  let fixture: ComponentFixture<DeletePopupComponent>;
  let coursesService: Partial<CoursesService>;

  beforeEach(async(() => {
    coursesService = { 
      removeCourse: jasmine.createSpy('removeCourse').and.returnValue([])
    };

    TestBed.configureTestingModule({
      declarations: [ DeletePopupComponent ],
      providers: [{provide: CoursesService, useValue: coursesService}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('method removeCourse should be called', () => {
    let button = fixture.debugElement.query(By.css('.btn-danger'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(coursesService.removeCourse).toHaveBeenCalled();
  });
});
