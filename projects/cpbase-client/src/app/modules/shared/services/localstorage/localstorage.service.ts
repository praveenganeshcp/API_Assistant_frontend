import { Injectable } from '@angular/core';
import { IAuthUser, ISignupResponse } from '../../../accounts/services/account.response';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
    constructor() { }

    private setItem(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    private getItem(key: string): string | null {
        return localStorage.getItem(key);
    }

    private removeItem(key: string) {
        localStorage.removeItem(key);
    }

    removeLoginData() {
        this.removeItem('authUser');
        this.removeItem('token');
    }

    setAuthUser(user: IAuthUser) {
        this.setItem('authUser', JSON.stringify(user));
    }

    setAuthToken(token: string) {
        this.setItem('token', token);
    }

    getAuthUser(): IAuthUser | null {
        let user = this.getItem('authUser');
        return user ? JSON.parse(user) : null;
    }

    getAuthToken() {
        return this.getItem('token');
    }
}
