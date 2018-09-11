import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError} from "rxjs";
import { catchError, retry, tap } from 'rxjs/operators';
import { User } from './user.model';

const USER_URL = 'http://localhost:3004/auth';

@Injectable()

export class AuthorizationService {

  constructor(private http: HttpClient) { }

  public isLoggedIn: boolean = false;

  public getUser() {
    return this.http.post(`${USER_URL}/userInfo`, { });
  }

  public login(login: string, password: string) {
    return this.http.post(`${USER_URL}/login`, { login, password })
      .pipe(
        tap((response: any) => {
          if (response.token) {
            localStorage.setItem('userToken', response.token);
          }
        }),
        retry(1),
        catchError(err => throwError(err))
    );
  }

  public logout() {
    localStorage.removeItem('userToken');
    return this.isLoggedIn = false;
  }

  public isAuth() {
    if (localStorage.getItem('userToken')) {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }
}
