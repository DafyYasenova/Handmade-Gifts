import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService){}

  login(event: Event, email:string, password:string){
    event.preventDefault();
    this.userService.login();
  }
}
