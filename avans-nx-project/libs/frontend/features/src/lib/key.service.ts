import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EntityService } from "./entity.service";
import { ApiResponse, IGame, IKey, IPlatform, IUser } from "@avans-nx-project/shared/api";
import { frontendEnvironment } from '@avans-nx-project/shared/util-env';
import { Observable, catchError, map, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class KeyService extends EntityService<IKey> {
    constructor(http: HttpClient, 
        //private authServe: AuthService
    ) {
        super(http, 
            frontendEnvironment.backendUrl, 
            'key', 
            //authServe
        );
    }

    public purchaseKey(_keyId: string, user: IUser): Observable<IKey | null> {
        console.log(`Purchase ${this.url}${this.endpoint}/user/${_keyId}`);
      
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            //'Authorization': `Bearer ${this.authService.getTokenFromLocalStorage()}`    
          }),
        };
      
        return this.http
          .put<ApiResponse<IKey>>(`${this.url}${this.endpoint}/user/${_keyId}`, user, httpOptions)
          .pipe(
            map((response: any) => response.results as IKey),
            tap(console.log),
            catchError((err) => this.handleError(err))
          );
    }

    public readAllKeyPurchasedByUser(_id: string): Observable<IKey[] | null> {
        console.log(`readAllKeyPurchasedByUser ${this.url}${this.endpoint}/user/purchased/${_id}`);
      
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            //'Authorization': `Bearer ${this.authService.getTokenFrom()}`    
          }),
        };
      
        return this.http
          .get<ApiResponse<IKey[]>>(`${this.url}${this.endpoint}/user/purchased/${_id}`, httpOptions)
          .pipe(
            map((response: any) => response.results as IKey[]),
            tap(console.log),
            catchError((err) => this.handleError(err))
          );
    }

    public readAllKeySoldByUser(_id: string): Observable<IKey[] | null> {
      console.log(`readAllKeySoldByUser ${this.url}${this.endpoint}/user/sold/${_id}`);
    
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          //'Authorization': `Bearer ${this.authService.getTokenFromLocalStorage()}`    
        }),
      };
    
      return this.http
        .get<ApiResponse<IKey[]>>(`${this.url}${this.endpoint}/user/sold/${_id}`, httpOptions)
        .pipe(
          map((response: any) => response.results as IKey[]),
          tap(console.log),
          catchError((err) => this.handleError(err))
        );
  }

  public readAllKeyLiveByUser(_id: string): Observable<IKey[] | null> {
    console.log(`readAllKeySoldByUser ${this.url}${this.endpoint}/user/live/${_id}`);
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //'Authorization': `Bearer ${this.authService.getTokenFromLocalStorage()}`    
      }),
    };
  
    return this.http
      .get<ApiResponse<IKey[]>>(`${this.url}${this.endpoint}/user/live/${_id}`, httpOptions)
      .pipe(
        map((response: any) => response.results as IKey[]),
        tap(console.log),
        catchError((err) => this.handleError(err))
      );
}
      
    public deleteUser(_id: string): Observable<void> {
        console.log(`deleteUser ${this.url}${this.endpoint}/user/${_id}`);
      
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            //'Authorization': `Bearer ${this.authService.getTokenFromLocalStorage()}`    
          }),
        };
      
        return this.http
          .delete<void>(`${this.url}${this.endpoint}/user/${_id}`, httpOptions)
          .pipe(
            tap(console.log),
            catchError((err) => this.handleError(err))
          );
    }
      
    public createGame(_keyId: string, game: IGame): Observable<IKey | null> {
        console.log(`create game ${this.url}${this.endpoint}/game/${_keyId}`);
      
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            //'Authorization': `Bearer ${this.authService.getTokenFromLocalStorage()}`    
          }),
        };
      
        return this.http
          .post<ApiResponse<IKey>>(`${this.url}${this.endpoint}/game/${_keyId}`, game, httpOptions)
          .pipe(
            map((response: any) => response.results as IKey),
            tap(console.log),
            catchError((err) => this.handleError(err))
          );
    }

    public readAllGame(): Observable<IGame[] | null> {
        console.log(`read all game ${this.url}${this.endpoint}/game`);
      
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            //'Authorization': `Bearer ${this.authService.getTokenFromLocalStorage()}`    
          }),
        };
      
        return this.http
          .get<ApiResponse<IGame[]>>(`${this.url}${this.endpoint}/game`, httpOptions)
          .pipe(
            map((response: any) => response.results as IGame[]),
            tap(console.log),
            catchError((err) => this.handleError(err))
          );
    }

    public upsertAllGame(game: IGame): Observable<IGame[] | null> {
        console.log(`upsert all game ${this.url}${this.endpoint}/game`);
      
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            //'Authorization': `Bearer ${this.authService.getTokenFromLocalStorage()}`    
          }),
        };
      
        return this.http
          .put<ApiResponse<IGame[]>>(`${this.url}${this.endpoint}/game`, game, httpOptions)
          .pipe(
            map((response: any) => response.results as IGame[]),
            tap(console.log),
            catchError((err) => this.handleError(err))
          );
    }

    public createPlatform(_keyId: string, platform: IPlatform): Observable<IKey | null> {
        console.log(`create platform ${this.url}${this.endpoint}/platform/${_keyId}`);
      
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            //'Authorization': `Bearer ${this.authService.getTokenFromLocalStorage()}`    
          }),
        };
      
        return this.http
          .post<ApiResponse<IKey>>(`${this.url}${this.endpoint}/platform/${_keyId}`, platform, httpOptions)
          .pipe(
            map((response: any) => response.results as IKey),
            tap(console.log),
            catchError((err) => this.handleError(err))
          );
    }
      
    public readAllPlatform(): Observable<IPlatform[] | null> {
        console.log(`read all platform ${this.url}${this.endpoint}/platform`);
      
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            //'Authorization': `Bearer ${this.authService.getTokenFromLocalStorage()}`    
          }),
        };
      
        return this.http
          .get<ApiResponse<IPlatform[]>>(`${this.url}${this.endpoint}/platform`, httpOptions)
          .pipe(
            map((response: any) => response.results as IPlatform[]),
            tap(console.log),
            catchError((err) => this.handleError(err))
          );
    }

    public upsertAllPlatform(platform: IPlatform): Observable<IPlatform[] | null> {
        console.log(`upsert all platform ${this.url}${this.endpoint}/platform`);
      
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            //'Authorization': `Bearer ${this.authService.getTokenFromLocalStorage()}`    
          }),
        };
      
        return this.http
          .put<ApiResponse<IPlatform[]>>(`${this.url}${this.endpoint}/platform`, platform, httpOptions)
          .pipe(
            map((response: any) => response.results as IPlatform[]),
            tap(console.log),
            catchError((err) => this.handleError(err))
          );
    }

    public readOneKeyWithAllUniqueGame(options?: any): Observable<IKey[] | null> {
        console.log(`read all available ${this.url}${this.endpoint}/all`);

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${this.authService.getTokenFromLocalStorage()}`    
            }),
        };

        return this.http
            .get<ApiResponse<IKey[]>>(`${this.url}${this.endpoint}/all`, {
                ...options,
                ...httpOptions,
            })
            .pipe(
                map((response: any) => response.results as IKey[]),
                tap(console.log),
                catchError((err) => this.handleError(err))
            );
    }

    public readAllAvailableKeyWithGame(gameName: string, options?: any): Observable<IKey[] | null> {
      console.log(`read all key with game ${this.url}${this.endpoint}/all/${gameName}`);
    
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          //'Authorization': `Bearer ${this.authService.getTokenFromLocalStorage()}`
        }),
      };
    
      return this.http
        .get<ApiResponse<IKey[]>>(`${this.url}${this.endpoint}/all/${gameName}`, {
          ...options,
          ...httpOptions,
        })
        .pipe(
          map((response: any) => response.results as IKey[]),
          tap(console.log),
          catchError((err) => this.handleError(err))
        );
    }
    
}