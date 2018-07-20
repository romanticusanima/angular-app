import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { CourseItemComponent } from './course-item.component';
import { ElementRef } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let button: ElementRef;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ CourseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    button = fixture.debugElement.query(By.css('.b-delete'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getId', () => {
    beforeEach(() => {
      spyOn(component.getItemId, 'emit');
      component.courseItem = { id : 1 } as any;
    });

    it('should click on button and return correct value', () => {
      component.deleteItem(1);
      expect(component.getItemId.emit).toHaveBeenCalledWith(1);
    });
  })
});
