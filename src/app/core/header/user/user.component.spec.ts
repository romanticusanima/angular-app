import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { AuthorizationService } from '../../authorization.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  let usersService: Partial<AuthorizationService>;

  beforeEach(async(() => {
    usersService = { logout: jasmine.createSpy('logout') };

    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [{provide: AuthorizationService, useValue: usersService}]
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
    fixture.detectChanges();
    expect(usersService.logout).toHaveBeenCalled();
  });
});
