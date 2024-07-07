import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, of } from 'rxjs';
import { ApiResponse, IUser, LoginResponse, Permission } from '@avans-nx-project/shared/api';
import { Router } from '@angular/router';
import { environment } from '@avans-nx-project/shared/util-env';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenProvider } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public currentUser$ = new ReplaySubject<IUser | undefined>(undefined);
  public isAdmin$ = new BehaviorSubject<boolean>(false);
  private readonly CURRENT_USER = 'currentuser';
  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(
    private tokenProvider: TokenProvider,
    private http: HttpClient,
    private router: Router
  ) {
    
    this.currentUser$.subscribe((user) => {
      this.isAdmin$.next(user?.permission == Permission.Admin);
    });

    const localUser = this.getUser();
    if (!localUser) {
      this.logout();
      return;
    }

    const token = this.tokenProvider.getToken();
    if (!token) {
      this.logout();
      return;
    }
    
    this.validateToken(token).subscribe((result) => {
      if (localUser && result) this.currentUser$.next(localUser);
      else this.logout();
    })
  }

  validateToken(token: string) : Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };

    return this.http.get<any>(`${environment.dataApiUrl}authentication/validate`, httpOptions).pipe(
      map((response) => {
        return true;
      }),
      catchError((error: any) => {
        console.error(error);
        return of(false);
      })
    );
  }

  getUser() : IUser | undefined {
    const userJson = localStorage.getItem(this.CURRENT_USER);
    if (!userJson) return undefined;

    try {
      const localUser = JSON.parse(userJson);
      return localUser;
    } catch {
      return undefined;
    }
  }

  saveUser(user: IUser) {
    localStorage.setItem(this.CURRENT_USER, JSON.stringify(user));
  }

  login(email: string, password: string) : Observable<IUser | undefined> {
    return this.http.post<ApiResponse<LoginResponse>>(`${environment.dataApiUrl}authentication/login`, {email, password}, {headers: this.headers})
      .pipe(
        map((result) => {
          if (typeof result.results === "string") {
            return undefined;
          }
          const loginResult = result.results as LoginResponse;
          this.saveUser(loginResult.user);
          this.tokenProvider.setToken(loginResult.token);
          this.currentUser$.next(loginResult.user);
          return loginResult.user;
        }),
        catchError((error: any) => {
          return of(undefined);
        })
      );
  }

  logout() : void {
    this.router.navigate(['/'])
      .then((success) => {
        if (!success) return;
        this.currentUser$.next(undefined);
        localStorage.removeItem(this.CURRENT_USER);
        this.tokenProvider.removeToken();
    });
  }
}