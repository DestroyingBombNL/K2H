import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EntityService } from "./entity.service";
import { ApiResponse, IKey, IUser } from "@avans-nx-project/shared/api";
import { frontendEnvironment } from '@avans-nx-project/shared/util-env';
import { Observable, catchError, map, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService extends EntityService<IUser> {
    constructor(http: HttpClient, 
        //private authServe: AuthService
    ) {
        super(http, 
            frontendEnvironment.backendUrl, 
            'user', 
            //authServe
        );
    }

    public register(user: IUser): Observable<IUser> {
        console.log(`register ${this.url}${this.endpoint}`);
        console.log(user);
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            //'Authorization': `Bearer ${this.authService.getTokenFromLocalStorage()}`
          }),
        };
    
        return this.http
          .post<ApiResponse<IUser>>(`${this.url}${this.endpoint}`, user, httpOptions)
          .pipe(
            tap(console.log),
            map((response: any) => response.results as IUser[]),
            catchError((err) => this.handleError(err))
          );
    }


    public override update(user: IUser, _id: string): Observable<IUser | undefined> {
        console.log(`update ${this.url}${this.endpoint}/${_id}`);

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${this.authService.getTokenFromLocalStorage()}`    
            }),
        };

        this.http
        .put<ApiResponse<IKey>>(`${this.url}}/key/user/${_id}`, user, httpOptions)
        .pipe(
            tap((response: ApiResponse<IKey>) => console.log('update_keys', response)),
            map((response: ApiResponse<IKey>) => response.results as IKey),
            catchError((err) => this.handleError(err))
        );

        return this.http
            .put<ApiResponse<IUser>>(`${this.url}${this.endpoint}/${_id}`, user, httpOptions)
            .pipe(
                tap((response: ApiResponse<IUser>) => console.log('update', response)),
                map((response: ApiResponse<IUser>) => response.results as IUser),
                catchError((err) => this.handleError(err))
            );
    }

    public deleteAll(id: string, username: string): Observable<boolean> {
        console.log(`delete all ${this.url}${this.endpoint}/key/user/${username}`);
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${this.authService.getTokenFromLocalStorage()}`    
            }),
        };

        this.http
        .delete<ApiResponse<IKey>>(`${this.url}}/key/user/${username}`, httpOptions)
        .pipe(
            tap((response: any) => console.log('delete_all', response)),
            map((response: any) => !!response),
            catchError((err) => this.handleError(err))
        );
        return this.delete(id)
    }
}