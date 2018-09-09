import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()

export class AuthorizationService {

  constructor() { }

  public isLoggedIn: boolean = false;

  public getUser(): User {
    return {
        "id": 8302,
        "fakeToken": "58ebfdf7f1f558c5c86e17f7",
        "name": {
          "first": "Name",
          "last": "LastName"
        },
        "login": "test",
        "password": "123"
      };
  }

  public login() {
    localStorage.setItem('currentUser', JSON.stringify({ token: 'fake token', name: this.getUser().name.first }));
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
