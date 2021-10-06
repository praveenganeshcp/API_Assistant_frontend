import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalstorageService } from '../services/localstorage/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private localStorageService: LocalstorageService) {}

    canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let user = this.localStorageService.getAuthUser();
        return user != null ? true : this.router.createUrlTree(['accounts', 'login'], {
            queryParams: {
                continue: location.pathname
            }
        })
    }
  
}
