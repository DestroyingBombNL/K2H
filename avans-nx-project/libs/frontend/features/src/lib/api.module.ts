import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlatformService } from './platform.service';
import { GameService } from './game.service';
import { KeyService } from './key.service';
import { UserService } from './user.service';
import { AuthenticationService } from './authentication/authenticationservice';
import { TokenProvider } from './authentication/token.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
    PlatformService,
    GameService,
    KeyService,
    UserService,
    AuthenticationService,
    TokenProvider,
  ],
})

export class APIModule {}