import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';
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
export class ResponseHandlerService implements HttpInterceptor {

	constructor(private router: Router, private localStorageService: LocalstorageService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
            filter(response => response instanceof HttpResponse),
            map((response: HttpResponse<SuccessResponse>) => {
                const resp = response.clone({body: response.body.result});
                return resp;
            }),
            catchError((err: HttpErrorResponse) => {
				if(err.status == 401) {
					console.log('unauthorized');
					this.localStorageService.removeLoginData();
					this.router.navigate(['accounts', 'login']);
				}
                let error: ErrorResponse = err.error;
                if(error && error.success == false) {
                    return throwError(error.message);
                }
                return throwError('Internal server error');
            })
        )
	}
}
