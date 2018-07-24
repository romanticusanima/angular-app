import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { LoginComponent } from './login.component';
import { AuthorizationService } from '../authorization.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authorizationService: Partial<AuthorizationService>;
  let el;

  beforeEach(async(() => {
    authorizationService = { 
      login: jasmine.createSpy('login').and.returnValue([])
    }; 



    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        {provide: AuthorizationService, useValue: authorizationService}
        //{provide: Router, useValue: router}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('login', () => {
    it('method login should be called', () => {
      el.querySelector('.login').click();
      fixture.detectChanges();
      expect(authorizationService.login).toHaveBeenCalled();
    });
  })
});
