import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EntityService } from "./entity.service";
import { IGame } from "@avans-nx-project/shared/api";
import { frontendEnvironment } from '@avans-nx-project/shared/util-env';

@Injectable({
    providedIn: 'root'
})
export class GameService extends EntityService<IGame> {
    constructor(http: HttpClient, 
        //private authServe: AuthService
    ) {
        super(http, 
            frontendEnvironment.backendUrl, 
            'game', 
            //authServe
        );
    }
}