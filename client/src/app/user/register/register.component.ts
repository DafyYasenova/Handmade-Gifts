import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form = this.fb.group({
    //controls
    username: ['dummy', ],
    email: ['dummy@abv.bg'],
    password: ['123'],
    rePassword: ['123123'],
  });
  constructor(private fb: FormBuilder){}

  register(): void {
    if(this.form.invalid){
      return;
    }

    console.log(this.form.value)
  }
}
