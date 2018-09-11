import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { CourseItemComponent } from './course-item.component';
import { SharedModule } from '../../shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let router: Partial<Router>;

  beforeEach(async(() => {
    router = { navigate: jasmine.createSpy('navigate') };

    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ CourseItemComponent ],
      providers: [{provide: Router, useValue: router}],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open popup', () => {
    component.ngOnInit();
    let button = fixture.debugElement.query(By.css('.btn-open'));
    button.triggerEventHandler('click', null);
    expect(component.isOpen).toBeTruthy();
  });

  it('method editCourse should redirect to /courses/id page', () => {
    component.editCourse(1);
    expect(router.navigate).toHaveBeenCalledWith(['/courses', 1]);
  });

  it('should receive isOpen value', () => {
    component.getIsOpen(true);
    expect(component.isOpen).toEqual(true);
  });

  it('should emit on delete course', () => {
    spyOn(component.delete, 'emit');
    component.deleteConfirm(true);
    expect(component.delete.emit).toHaveBeenCalled();
  });
});
