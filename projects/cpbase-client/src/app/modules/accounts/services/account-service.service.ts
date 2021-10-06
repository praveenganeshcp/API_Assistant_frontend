import { Injectable } from '@angular/core';
import { AccountApiService } from './account-api.service';
import { ILoginRequest, ISignupRequest } from './account.response';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

    constructor(private accountAPIService: AccountApiService) { }

    createAccount(newUser: ISignupRequest) {
        return this.accountAPIService.createAccount(newUser);
    }

    loginUser(loginData: ILoginRequest) {
        return this.accountAPIService.loginUser(loginData);
    }
}
