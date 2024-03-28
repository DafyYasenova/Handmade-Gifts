import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  user: User | undefined;
  USER_KEY = '[user]';


  get isLogged(): boolean {
    return !!this.user;
  }
  constructor(private http: HttpClient) {

    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser)
    } catch (error) {
      this.user = undefined;
    }
  }

  login(email: string, password: string) {
    // this.user = {
    //   username: 'Me',
    //   email: 'example@abv.bg',
    //   password: '123123',
    //   id: '123',
    // }

    // localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))

    // return this.http.post<User>(`/users/login`, { email, password });

    
      return this.http.post<{ email: string, username: string, _id: string, accessToken: string }>(`${environment.apiUrl}/users/login`, { email, password })
        .pipe(
          tap(response => {
            localStorage.setItem('username', response.username);
            localStorage.setItem('email', response.email);
            localStorage.setItem('userId', response._id);
            localStorage.setItem('accessToken', response.accessToken);
  
            // this.user$$.next({
            //   email: response.email,
            //   name: response.username,
            //   _id: response._id,
            //   accessToken: response.accessToken
            // });
       
  
          })
        );
  
    
  }


  register(
    username: string,
    email: string,
    password: string,
    acessToken: string,
  ) {

    const { apiUrl } = environment;



    return this.http.post<{ username: string, email: string, _id: string, accessToken: string }>(`${apiUrl}/users/register`, {
      username,
      email,
      password,
      acessToken,
    })
    .pipe(tap(
      response => {

      localStorage.setItem('username', response.username);
      localStorage.setItem('email', response.email);
      localStorage.setItem('_id', response._id)
      localStorage.setItem('accessToken', response.accessToken);

      console.log(response)

    }))

  }



  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY)
  }
}

