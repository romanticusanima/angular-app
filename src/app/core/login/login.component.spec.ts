import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AuthorizationService } from '../authorization.service';
import { LoaderService } from '../../shared/loader/loader.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  
  let authorizationService: Partial<AuthorizationService>;
  let router: Partial<Router>;

  beforeEach(async(() => {
    authorizationService = { login: jasmine.createSpy('login') }; 
    router = { navigate: jasmine.createSpy('navigate') };

    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule],
      providers: [
        {provide: AuthorizationService, useValue: authorizationService},
        {provide: Router, useValue: router},
        LoaderService
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

  it('method login should be called', () => {
    component.submit();
    expect(authorizationService.login).toHaveBeenCalled();
  });

});
