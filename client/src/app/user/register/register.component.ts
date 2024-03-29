import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { matchPasswordsValidator } from 'src/app/shared/utils/match-passwords-validator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/core/error/error.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private errorService: ErrorService) { }

  form = this.fb.group({

    username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],

    passGroup: this.fb.group({

      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      rePassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    }, {
      validators: [matchPasswordsValidator('password', 'rePassword')],
    })
  });


  register(): void {
    if (this.form.invalid) {
      return;
    }
    const { username, email, passGroup: { password, rePassword } = {},
    } = this.form.value;

    this.userService.register(username!, email!, password!, rePassword!).subscribe(() => {
      this.router.navigate(['/']);
    },
      // (error) => {

      //   console.error('Error during registration:', error);

      //   this.errorService.setError(error)


      // }
    )
  }
}
