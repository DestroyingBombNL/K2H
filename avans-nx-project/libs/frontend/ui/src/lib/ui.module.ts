import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlatformReadAllComponent } from './platform/read-all/platform-read-all.component';
import { KeyReadAllComponent } from './key/read-all/key-read-all.component';
import { GameDetailsComponent } from './key/details/game-details.component';
import { LoginComponent } from './user/login/login.component';
import { HistoryComponent } from './myKeys/myKeys.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SellComponent } from './key/sell/sell.component';
import { RegisterComponent } from './user/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PlatformReadAllComponent,
    KeyReadAllComponent,
    GameDetailsComponent,
    LoginComponent,
    HistoryComponent,
    AboutComponent,
    HeaderComponent,
    ProfileComponent,
    SellComponent,
    RegisterComponent,
  ],
  exports: [
    PlatformReadAllComponent,
    KeyReadAllComponent,
    GameDetailsComponent,
    LoginComponent,
    HistoryComponent,
    AboutComponent,
    HeaderComponent,
    ProfileComponent,
    SellComponent,
    RegisterComponent,
  ],
  providers: [],
})

export class UIModule {}