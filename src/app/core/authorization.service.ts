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
    localStorage.setItem('currentUser', JSON.stringify({ token: 'fake token', name: this.getUser().firstName }));
    return this.isLoggedIn = true;
  }

  public logout() {
    localStorage.removeItem('currentUser');
    return this.isLoggedIn = false;
  }

  public isAuth() {
    if (localStorage.getItem('currentUser')) {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }
}
