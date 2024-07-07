import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '@avans-nx-project/frontend/features';
import { Subscription } from 'rxjs';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'avans-nx-project-login',
  templateUrl: './login.component.html',
  template:'<key-to-happiness-web-header [childProperty]="name"></key-to-happiness-web-header>',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  username: string | undefined;
  subscription: Subscription | null = null;

  constructor(private readonly authenticationService: AuthenticationService, private readonly router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("", [ Validators.required, this.validEmail.bind(this) ]),
      password: new FormControl("", [ Validators.required, this.validPassword.bind(this) ]),
    });

    if (this.authenticationService.getUser()) {
      console.log(this.authenticationService.getUser())
      this.router.navigate(['/']);
    }
  }

  onSubmit(): void {
    console.log("a " + this.loginForm?.value.email + this.loginForm?.value.password)
    console.log(this.loginForm?.valid)
    if (this.loginForm?.valid) {
      this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
        (user) => {
          if (user) {
            this.username = this.authenticationService.getUser()?.username;
            this.router.navigate(['/']);
          }
        });
    }
  }

  validEmail(control: FormControl): { [s: string]: boolean } | null {
    const regexp = new RegExp(
      '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
    );
    if (regexp.test(control.value) !== true) {
      return { email: false };
    } else {
      return null;
    }
  }

  validPassword(control: FormControl): { [s: string]: boolean } | null {
    const regexp = new RegExp('^[a-zA-Z]([a-zA-Z0-9]){2,14}');
    if (regexp.test(control.value) !== true) {
      return { password: false };
    } else {
      return null;
    }
  }
}
