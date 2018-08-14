import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

import { AddCourseButtonComponent } from './add-course-button.component';

describe('AddCourseComponent', () => {
  let component: AddCourseButtonComponent;
  let fixture: ComponentFixture<AddCourseButtonComponent>;
  let router: Partial<Router>;

  beforeEach(async(() => {
    router = { navigate: jasmine.createSpy('navigate') };

    TestBed.configureTestingModule({
      declarations: [ AddCourseButtonComponent ],
      providers: [{provide: Router, useValue: router}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('method addCourse should redirect to /courses/new page', () => {
    let button = fixture.debugElement.query(By.css('.btn-add'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledWith(['/courses/new']);
  });
});
