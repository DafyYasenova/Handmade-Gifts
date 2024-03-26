import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/utils/email-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }
 


  form = this.fb.group({

    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
  })

  
  login(): void {

    if (this.form.invalid) {
      return;
    }

    const { email, password } = this.form.value;

   
    this.userService.login(email!, password!).subscribe(() => {
      this.router.navigate(['/'])

    })


  }
}
