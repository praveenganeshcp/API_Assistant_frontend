import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { LocalstorageService } from '../localstorage/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private localStorageService: LocalstorageService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req.url);
        let authRequest = req.clone({setHeaders: {
            'Authorization': 'Bearer '+this.localStorageService.getAuthToken(),
        }})
        return next.handle(authRequest);
    }
}
