import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError, BehaviorSubject} from "rxjs";
import { catchError, retry, tap } from 'rxjs/operators';
import { User } from './user.model';

const USER_URL = 'http://localhost:3004/auth';

@Injectable()

export class AuthorizationService {

  constructor(private http: HttpClient) { }

  public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public getUser(fakeToken) {
    return this.http.post(`${USER_URL}/userInfo`,  fakeToken );
  }

  public login(login, password) {
    return this.http.post(`${USER_URL}/login`, {login, password} )
      .pipe(
        tap((response: any) => {
          if (response.token) {
            this.isLoggedIn$.next(true);
          }
        })
      );
  }

  public logout() {
    this.isLoggedIn$.next(false);
  }

  public isAuth() {
    return this.isLoggedIn$;
  }
}
