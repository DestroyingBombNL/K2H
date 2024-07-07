import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser, Permission } from '@avans-nx-project/shared/api';
import { AuthenticationService } from './authenticationservice';

@Injectable({
  providedIn: 'root'
})

export class LoggedInAuthenticationGuard implements CanActivate {
    constructor(private authenticationService: AuthenticationService, private router: Router) {}

    canActivate(): Observable<boolean> {
        return this.authenticationService.currentUser$.pipe(
            map((user: IUser | undefined) => {
                if (user) {
                    return true;
                } else {
                    this.router.navigate(['/']);
                    return false;
                }
            })
        );
    }
}

@Injectable({
    providedIn: 'root'
  })
  export class AdminGuard implements CanActivate {
    constructor(private authenticationService: AuthenticationService, private router: Router) {}

    canActivate(): Observable<boolean> {
        return this.authenticationService.currentUser$.pipe(
            map((user: IUser | undefined) => {
                if (user?.permission === Permission.Admin) {
                    return true;
                } else {
                    this.router.navigate(['/']);
                    return false;
                }
            })
        );
    }
}