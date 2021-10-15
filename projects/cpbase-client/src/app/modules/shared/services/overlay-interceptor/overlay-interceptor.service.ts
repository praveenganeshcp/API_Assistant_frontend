import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { AppSettingsService } from '../app-settings/app-settings.service';

@Injectable({
  providedIn: 'root'
})
export class OverlayInterceptorService implements HttpInterceptor {

	constructor(private appSettingsService: AppSettingsService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		this.appSettingsService.addRequest();
		return next.handle(req).pipe(
			filter(res => res instanceof HttpResponse),
			map(res => {
				this.appSettingsService.decRequest();
				return res;
			}),
			catchError(err => {
				this.appSettingsService.decRequest();
				return throwError(err);
			})
		)
	}


}
