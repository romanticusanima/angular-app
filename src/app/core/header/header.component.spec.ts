import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthorizationService } from '../authorization.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  
  let authorizationService: Partial<AuthorizationService>;

  beforeEach(async(() => {
    authorizationService = { getUser: jasmine.createSpy('getUser') };

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

  it('should use real value', () => {
    fixture.detectChanges();
    expect(authorizationService.getUser).toHaveBeenCalled();
  });

  it('should use real value', () => {
    fixture.detectChanges();
    expect(authorizationService.getUser().id).toEqual(1);
  });
});
