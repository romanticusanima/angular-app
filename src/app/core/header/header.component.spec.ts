import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthorizationService } from '../authorization.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  
  let authorizationService: Partial<AuthorizationService>;

  beforeEach(async(() => {
    authorizationService = { 
      getUser: jasmine.createSpy('getUser').and.returnValue({}),
      isAuth: jasmine.createSpy('isAuth')
    };

    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [{provide: AuthorizationService, useValue: authorizationService}],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getUser method', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(authorizationService.getUser).toHaveBeenCalled();
  });
});
