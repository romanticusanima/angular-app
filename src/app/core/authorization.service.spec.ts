import { TestBed, inject } from '@angular/core/testing';

import { AuthorizationService } from './authorization.service';
import { bloomAdd } from '@angular/core/src/render3/di';

describe('AuthorizationService', () => {
  let service = new AuthorizationService();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizationService]
    });
  });

  it('should be created', inject([AuthorizationService], (service: AuthorizationService) => {
    expect(service).toBeTruthy();
  }));

  it('should return user info', () => {
    expect(service.getUser().id).toEqual(1);
  });

  it('should login', () => {
    expect(service.login()).toEqual(true);
  });

  it('should loggout', () => {
    expect(service.logout()).toEqual(false);
  });

  it('should return auth info', () => {
    expect(service.isAuth()).toEqual(false);
  });

  it('should return auth info', () => {
    service.login();
    expect(service.isAuth()).toEqual(true);
  });
});
