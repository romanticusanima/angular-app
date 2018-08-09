import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthorizationService } from '../authorization.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  
  let usersService: Partial<AuthorizationService>;

  beforeEach(async(() => {
    usersService = { getUser: jasmine.createSpy('getUser') };

    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [{provide: AuthorizationService, useValue: usersService}],
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
    expect(usersService.getUser).toHaveBeenCalled();
  });

  it('should use real value', () => {
    fixture.detectChanges();
    expect(usersService.getUser().id).toEqual(1);
  });
});
