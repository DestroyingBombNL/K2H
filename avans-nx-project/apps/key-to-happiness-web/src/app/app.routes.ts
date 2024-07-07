import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { KeyReadAllComponent, PlatformReadAllComponent, GameDetailsComponent, LoginComponent, RegisterComponent, AboutComponent, HistoryComponent, ProfileComponent, SellComponent } from '@avans-nx-project/frontend/ui';

const appName = 'K2H | '
export const appRoutes: Route[] = [
    {
        path: '', 
        pathMatch: 'full',
        component: KeyReadAllComponent,
        title: `${appName} - Home` 
    },
    { 
        path: 'login', 
        pathMatch: 'full',
        component: LoginComponent,
        title: `${appName} - Login` 
    },
    { 
        path: 'register', 
        pathMatch: 'full',
        component: RegisterComponent,
        title: `${appName} - Register` 
    },
    { 
        path: 'about', 
        pathMatch: 'full',
        component: AboutComponent,
        title: `${appName} - About` 
    },
    { 
        path: 'myKeys', 
        pathMatch: 'full',
        component: HistoryComponent,
        title: `${appName} - myKeys` 
    },
    { 
        path: 'platforms', 
        pathMatch: 'full',
        component: PlatformReadAllComponent,
        title: `${appName} - Platforms` 
    },
    { 
        path: 'profile', 
        pathMatch: 'full',
        component: ProfileComponent,
        title: `${appName} - Profile` 
    },
    { 
        path: 'sell', 
        pathMatch: 'full',
        component: SellComponent,
        title: `${appName} - Sell` 
    },
    {
        path: 'game/:gameName', 
        pathMatch: 'full',
        component: GameDetailsComponent,
        title: `${appName} - Game Details` 
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {}