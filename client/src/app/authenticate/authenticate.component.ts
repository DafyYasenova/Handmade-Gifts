import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  isLoggedIn = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    this.isLoggedIn = this.userService.isLogged;
   
    console.log(this.isLoggedIn)
    if (!this.isLoggedIn) {

      this.router.navigate(['/'])
    }

  }
}
