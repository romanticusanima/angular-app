import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { CreatedDateDirective } from './created-date.directive';
import { Component } from '@angular/core';

@Component({
  template: '<div [appCreatedDate]="createdDate"></div>'
})
class TestCreatedDateComponent {
  public createdDate = new Date('09.17.2018')
}

describe('CreatedDateDirective', () => {
  let component: TestCreatedDateComponent;
  let fixture: ComponentFixture<TestCreatedDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedDateDirective, TestCreatedDateComponent ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCreatedDateComponent);
    component = fixture.componentInstance;
  });

  it('should create directive component', () => {
    fixture.detectChanges();
    const directiveEl = fixture.debugElement.query(By.directive(CreatedDateDirective));
    expect(directiveEl.nativeElement).toBeDefined();
  });

  it('should create directive component', () => {
    fixture.componentInstance.createdDate = new Date('08.15.2018');
    fixture.detectChanges();
    const directiveEl = fixture.debugElement.query(By.directive(CreatedDateDirective));
    expect(directiveEl.nativeElement).toBeDefined();
  });
});