import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from "@angular/platform-browser";
import { CourseAuthorComponent } from './course-author.component';

describe('CourseAuthorComponent', () => {
  let component: CourseAuthorComponent;
  let fixture: ComponentFixture<CourseAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ CourseAuthorComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAuthorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on change', () => {
    spyOn(component.onChangeAuthor, 'emit');
    fixture.detectChanges();
    let input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.dispatchEvent(new KeyboardEvent('keydown', {'code': '75'}));
    expect(component.onChangeAuthor.emit).toHaveBeenCalled();
});
});
