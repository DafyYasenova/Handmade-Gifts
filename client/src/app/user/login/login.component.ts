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

  constructor(private fb: FormBuilder,  private userService: UserService, private router: Router) { }
  // constructor(private fb: FormBuilder,  ) { }
 

  form = this.fb.group({

    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    password: ['', [Validators.required , Validators.minLength(6), Validators.maxLength(15)]],
  })

  // login(event: Event, email: string, password: string) {
  login() : void{
  
    if (this.form.invalid) {
      return;
    } else{
      // todo implement login function
      this.userService.login();
      this.router.navigate(['/'])
    }

  }
}
