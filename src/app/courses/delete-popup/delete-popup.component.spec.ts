import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DeletePopupComponent } from './delete-popup.component';

describe('DeletePopupComponent', () => {
  let component: DeletePopupComponent;
  let fixture: ComponentFixture<DeletePopupComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ DeletePopupComponent ]
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

  it('method deleteItem should be called', () => {
    let button = fixture.debugElement.query(By.css('.btn-danger'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.confirmDelete).toBeTruthy();
  });

  it('method closePopup should be called', () => {
    let button = fixture.debugElement.query(By.css('.btn-primary'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.isOpen).toBeFalsy();
  });
});
