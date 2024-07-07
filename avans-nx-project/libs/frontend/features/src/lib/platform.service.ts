import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EntityService } from "./entity.service";
import { IPlatform } from "@avans-nx-project/shared/api";
import { frontendEnvironment } from '@avans-nx-project/shared/util-env';

@Injectable({
    providedIn: 'root'
})
export class PlatformService extends EntityService<IPlatform> {
    constructor(http: HttpClient, 
        //private authServe: AuthService
    ) {
        super(http, 
            frontendEnvironment.backendUrl, 
            'platform', 
            //authServe
        );
    }
}