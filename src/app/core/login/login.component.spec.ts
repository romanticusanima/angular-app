import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';
import { AuthorizationService } from '../authorization.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authorizationService: Partial<AuthorizationService>;
  let router: Partial<Router>;

  beforeEach(async(() => {
    authorizationService = { login: jasmine.createSpy('login').and.returnValue([]) }; 
    router = { navigate: jasmine.createSpy('navigate') };

    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        {provide: AuthorizationService, useValue: authorizationService},
        {provide: Router, useValue: router}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('login', () => {
    it('method login should be called', () => {
      let button = fixture.debugElement.query(By.css('.btn-login'));
      button.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(authorizationService.login).toHaveBeenCalled();
    });
  })
});
