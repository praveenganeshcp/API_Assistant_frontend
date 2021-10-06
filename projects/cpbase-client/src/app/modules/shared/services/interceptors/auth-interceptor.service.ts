import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { LocalstorageService } from '../localstorage/localstorage.service';

interface SuccessResponse {
    success: boolean;
    result: any;
}

interface ErrorResponse {
    success: boolean;
    message: string;
}

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
        return next.handle(authRequest).pipe(
            filter(response => response instanceof HttpResponse),
            map((response: HttpResponse<SuccessResponse>) => {
                const resp = response.clone({body: response.body.result});
                return resp;
            }),
            catchError((err: HttpErrorResponse) => {
                let error: ErrorResponse = err.error;
                if(error && error.success == false) {
                    return throwError(error.message);
                }
                return throwError('Internal server error');
            })
        )
    }
}
