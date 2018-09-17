import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';

import { AuthorizationService } from '../../core/authorization.service';
import { AuthActionTypes, LogIn, LogInSuccess, LogInFailure, LogOut } from '../actions/auth.actions';


@Injectable()
export class AuthEffects {

    constructor(
        private actions: Actions,
        private authService: AuthorizationService,
        private router: Router
    ) {}

    // effects
    @Effect()
    LogIn: Observable<any> = this.actions
        .pipe(
            ofType(AuthActionTypes.LOGIN),
            map((action: LogIn) => action.payload),
            switchMap(payload => {
                return this.authService.login(payload.login, payload.password)
                    .pipe(
                        map((user) => {
                            return new LogInSuccess({token: user.token});
                        }),
                        catchError((error) => {
                            return of(new LogInFailure({ error: error }));
                        })
                    );
            })
        );

    @Effect({ dispatch: false })
    LogInSuccess: Observable<any> = this.actions
        .pipe(
            ofType(AuthActionTypes.LOGIN_SUCCESS),
            tap((user) => {
                localStorage.setItem('currentUser', user.payload.token);
                this.router.navigateByUrl('/courses');
            })
        );

    @Effect({ dispatch: false })
    LogInFailure: Observable<any> = this.actions
        .pipe(
            ofType(AuthActionTypes.LOGIN_FAILURE)
        );

    @Effect({ dispatch: false })
    LogOut: Observable<any> = this.actions
        .pipe(
            ofType(AuthActionTypes.LOGOUT),
            tap((user) => {
                localStorage.removeItem('currentUser');
                this.authService.logout();
                this.router.navigateByUrl('/login');
            })
        );
}