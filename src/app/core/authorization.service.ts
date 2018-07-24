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

  public login() {
    return this.isLoggedIn = true;
  }

  public logout() {
    return this.isLoggedIn = false;
  }

  public isAuth() {
    return this.isLoggedIn;
  }
}
