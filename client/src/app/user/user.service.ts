import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: UserForAuth | undefined;

  isLogged = false;
  USER_KEY = '[user]';

  
  constructor() {

    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser)
    } catch (error) {
      this.user = undefined;
    }
  }

  login() {

  }

  logout() {

  }
}

