import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()

export class AuthorizationService {

  constructor() { }

  public isLoggedIn: boolean = false;

  public getUser(): User {
    return {
        id: 1,
        firstName: 'Nastya',
        lastName: 'Malai'
      };
  }

  public Login() {
    return this.isLoggedIn = true;
  }

  public Logout() {
    return this.isLoggedIn = false;
  }

  public IsAuth() {
    return this.isLoggedIn;
  }
}
