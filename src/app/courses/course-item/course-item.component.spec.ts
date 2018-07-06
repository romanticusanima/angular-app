import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { CourseItemComponent } from './course-item.component';
import { ElementRef } from '@angular/core';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let button: ElementRef;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    button = fixture.debugElement.query(By.css('.b-delete'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getId', () => {
    it('should click on button and return correct value', () => {
      spyOn(component.getItemId, 'emit');
      component.getId(1);
      expect(component.getItemId.emit).toHaveBeenCalled();
      expect(component.getItemId.emit).toHaveBeenCalledWith(1);
    });
  })
});
