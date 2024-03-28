import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";



@Injectable()
class AppInterceptor implements HttpInterceptor {
 
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('request', req);

        const accessToken = localStorage.getItem('acessToken');

        console.log('accessToken', accessToken);

        if (req.url.startsWith('http://localhost:3030') && accessToken) {
            req = req.clone({
             setHeaders :{
                'X-Autorization': accessToken
             }
            })
            console.log('req', req)
        }

        if(!req.headers.has('Content-Type')){
            req = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json'
                }
            })
        }
        return next.handle(req);

    }
}

export const appInterceptorProvider: Provider = {
    useClass: AppInterceptor,
    multi: true,
    provide: HTTP_INTERCEPTORS,
}