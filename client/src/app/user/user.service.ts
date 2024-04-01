import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{

  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: User | undefined;
  
  private userSubscription: Subscription = new Subscription;
  
  
  get isLogged(): boolean {
    // console.log(this.user)
    return !!this.user;
  }

  constructor(private http: HttpClient) {

    this.userFromLocaleStorage();
   
   this.userSubscription =  this.user$.subscribe((user) =>{
      this.user = user;
    })
  }

  
  private userFromLocaleStorage(): void { 
    const accessToken = localStorage.getItem('accessToken'); 
    const email = localStorage.getItem('email'); 
    const username = localStorage.getItem('username'); 
    const _id = localStorage.getItem('userId'); 
 

    if (accessToken && email && username && _id) { 
   
      this.user$$.next({ email, username, _id, accessToken }); 
    
     
    }else{ 
      this.user$$.next(undefined); 
    } 
  }

  login(email: string, password: string) {
    
      return this.http.post<{ email: string, username: string, _id: string, accessToken: string }>(`${environment.apiUrl}/users/login`, { email, password })
        .pipe(
          tap(response => {
            localStorage.setItem('username', response.username);
            localStorage.setItem('email', response.email);
            localStorage.setItem('userId', response._id);
            localStorage.setItem('accessToken', response.accessToken);
  
            this.user$$.next({
              email: response.email,
              username: response.username,
              _id: response._id,
              accessToken: response.accessToken
            });
  
            console.log('login response', response)
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
      localStorage.setItem('userId', response._id)
      localStorage.setItem('accessToken', response.accessToken);

      this.user$$.next({ 
        email: response.email, 
        username: response.username, 
        _id: response._id, 
        accessToken: response.accessToken 
      }); 
      console.log('response', response)

    }))

  }


logout() {
  const { apiUrl} = environment;
   return this.http.post<User>(`${apiUrl}/users/logout`, {})
   .pipe(
    tap(response => {
      localStorage.clear();
      this.user$$.next(undefined);
    })
   )
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
  }
}