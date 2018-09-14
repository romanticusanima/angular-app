import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthorizationService } from '../core/authorization.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authorizationService: AuthorizationService,
                private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot): Observable<boolean> {
        if (!this.authorizationService.isLoggedIn$.value) {
            this.router.navigate(['/login']);
            return of(false);
        } 
        return of(true);
    }
}