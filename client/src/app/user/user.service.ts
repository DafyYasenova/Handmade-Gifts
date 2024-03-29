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
  
  userSubscription: Subscription;
  
  get isLogged(): boolean {
    return !!this.user;
  }
  constructor(private http: HttpClient) {
   this.userSubscription =  this.user$.subscribe((user) =>{
      this.user = user;
    })
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

      this.user$$.next({ 
        email: response.email, 
        username: response.username, 
        _id: response._id, 
        accessToken: response.accessToken 
      }); 

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


//   getProfile(){
// return this.http.get<User>('/users/:id').pipe(tap((user)=> this.user$$.next(user)));

//   }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
  }
}