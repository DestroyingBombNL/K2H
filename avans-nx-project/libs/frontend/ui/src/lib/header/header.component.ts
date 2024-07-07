import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService, KeyService, UserService } from "@avans-nx-project/frontend/features";
import { IUser } from "@avans-nx-project/shared/api";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'key-to-happiness-web-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
  user: IUser | undefined;
  constructor(
    readonly router: Router,
    readonly route: ActivatedRoute,
    readonly authenticationService: AuthenticationService,
    readonly userService: UserService,
    readonly keyService: KeyService,
  ) {
  }

  ngOnInit(): void {
    this.user = this.authenticationService.getUser();
  }

  /* async delete(): Promise<void> {
    await this.logout();
    if (this.user) {
      this.userService.delete(this.user._id);
      this.keyService.deleteUser(this.user._id);
      console.log('user is deleted');
      console.log(this.user._id)
      this.router.navigate(['/']);
    } else {
      console.log('user is not defined');
    }
  }*/

  async logout(): Promise<void> {
    await this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}