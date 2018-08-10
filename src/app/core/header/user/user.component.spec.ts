import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

import { UserComponent } from './user.component';
import { AuthorizationService } from '../../authorization.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  let authorizationService: Partial<AuthorizationService>;
  let router: Partial<Router>;

  beforeEach(async(() => {
    authorizationService = { logout: jasmine.createSpy('logout') };
    router = { navigate: jasmine.createSpy('navigate') };

    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [
        {provide: AuthorizationService, useValue: authorizationService},
        {provide: Router, useValue: router}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use real value', () => {
    let button = fixture.debugElement.query(By.css('.btn-logout'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(authorizationService.logout).toHaveBeenCalled();
  });
});
