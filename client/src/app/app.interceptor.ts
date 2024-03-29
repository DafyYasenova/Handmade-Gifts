import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable, catchError, throwError} from "rxjs";
import { ErrorService } from "./core/error/error.service";
import { Router } from "@angular/router";



@Injectable()
class AppInterceptor implements HttpInterceptor {
 
    constructor(private errorService: ErrorService, private router: Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     

        const accessToken = localStorage.getItem('acessToken');

        if (req.url.startsWith('http://localhost:3030') && accessToken) {
            req = req.clone({
             setHeaders :{
                'X-Autorization': accessToken
             }
            })
        }

        if(!req.headers.has('Content-Type')){
            req = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json'
                }
            })
        }

        
        return next.handle(req)
        .pipe(
            catchError((error: HttpErrorResponse) => {
                this.errorService.setError(error);
                if(error.status === 401){
                    this.router.navigate(['/login'])
                } else{
                    this.errorService.setError(error);
                    this.router.navigate(['/error'])
                }
                return throwError(error);
            }
            )
        );

    }
}

export const appInterceptorProvider: Provider = {
    useClass: AppInterceptor,
    multi: true,
    provide: HTTP_INTERCEPTORS,
}