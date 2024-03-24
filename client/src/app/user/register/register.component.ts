import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { matchPasswordsValidator } from 'src/app/shared/utils/match-passwords-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
   
    username: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],

    passGroup: this.fb.group({

      password: ['', [Validators.required , Validators.minLength(6), Validators.maxLength(15)]],
      rePassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)] ],
    },{
      validators: [matchPasswordsValidator('password','rePassword')],
    })
  });
  

  register(): void {
    if (this.form.invalid) {
      return;
    } else{
      // todo implement register function
    }

    console.log(this.form.value)
  }
}
