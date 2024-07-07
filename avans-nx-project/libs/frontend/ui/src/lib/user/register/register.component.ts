import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService, UserService } from '@avans-nx-project/frontend/features';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'avans-nx-project-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private readonly userService: UserService, private readonly authenticationService: AuthenticationService, private readonly router: Router) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl("", [Validators.required, this.validUsername.bind(this)]),
      email: new FormControl("", [Validators.required, this.validEmail.bind(this)]),
      imageLink: new FormControl("", [Validators.required, this.validImageLink.bind(this)]),
      firstName: new FormControl("", [Validators.required, this.validFirstName.bind(this)]),
      lastName: new FormControl("", [Validators.required, this.validLastName.bind(this)]),
      phonenumber: new FormControl("", [Validators.required, this.validPhoneNumber.bind(this)]),
      password: new FormControl("", [Validators.required, this.validPassword.bind(this)]),
      country: new FormControl("", [Validators.required, this.validCountry.bind(this)]),
      state: new FormControl("", [Validators.required, this.validState.bind(this)]),
      birthday: new FormControl("", [Validators.required, this.validBirthday.bind(this)]),
      organisation: new FormControl("", [Validators.required, this.validOrganisation.bind(this)]),
    });

    if (this.authenticationService.getUser()) {
      console.log(this.authenticationService.getUser())
      this.router.navigate(['/']);
    }
  }

  onSubmit(): void {
    Object.keys(this.registerForm.controls).forEach(key => {
      const control = this.registerForm.get(key);
      if (control && !control.valid) {
        console.log(key);
        document.getElementById(key)?.classList.add('invalid-input');
        document.getElementById(`${key}-error`)?.classList.add('error-message-visible');
      } else {
        document.getElementById(key)?.classList.remove('invalid-input');
        document.getElementById(`${key}-error`)?.classList.remove('error-message-visible');
      }
    });
  
    // If the entire form is valid, submit the form
    if (this.registerForm?.valid) {
      console.log(this.registerForm.value)
      this.userService.register(this.registerForm.value);
    }
  }  

  validUsername(control: FormControl): { [s: string]: boolean } | null {
    const regexp = new RegExp('^[a-zA-Z0-9]+$');
    if (!regexp.test(control.value)) {
      return { username: false };
    } else {
      return null;
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

  validImageLink(control: FormControl): { [s: string]: boolean } | null {
    if (typeof control.value !== 'string') {
      return { imageLink: false };
    } else {
      return null;
    }
  }

  validFirstName(control: FormControl): { [s: string]: boolean } | null {
    const regexp = new RegExp('^[a-zA-Z]+$');
    if (!regexp.test(control.value)) {
      return { firstName: false };
    } else {
      return null;
    }
  }

  validLastName(control: FormControl): { [s: string]: boolean } | null {
    const regexp = new RegExp('^[a-zA-Z]+$');
    if (!regexp.test(control.value)) {
      return { lastName: false };
    } else {
      return null;
    }
  }

  validPhoneNumber(control: FormControl): { [s: string]: boolean } | null {
    const regexp = new RegExp('^[0-9+-]+$');
    if (!regexp.test(control.value)) {
      return { phoneNumber: false };
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

  validCountry(control: FormControl): { [s: string]: boolean } | null {
    if (typeof control.value !== 'string') {
      return { country: false };
    } else {
      return null;
    }
  }

  validState(control: FormControl): { [s: string]: boolean } | null {
    if (typeof control.value !== 'string') {
      return { state: false };
    } else {
      return null;
    }
  }

  validBirthday(control: FormControl): { [s: string]: boolean } | null {
    // Regular expression to match the "YYYY-MM-DD" format
    const regexp = new RegExp('^\\d{4}-\\d{2}-\\d{2}$');
    if (!regexp.test(control.value)) {
      return { birthday: false };
    } else {
      // Parse the date from the input value
      const birthdayDate = new Date(control.value);
      // Get today's date
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for accurate comparison
  
      if (birthdayDate >= today) {
        return { birthday: true, futureDate: true }; // Return an additional key to identify a future date
      }
  
      return null;
    }
  }
  
  validOrganisation(control: FormControl): { [s: string]: boolean } | null {
    if (typeof control.value !== 'string') {
      return { organisation: false };
    } else {
      return null;
    }
  }
}
