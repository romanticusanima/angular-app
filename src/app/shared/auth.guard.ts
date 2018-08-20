import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthorizationService } from '../core/authorization.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authorizationService: AuthorizationService,
                private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot): boolean {
        if (this.authorizationService.isAuth()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}