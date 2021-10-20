import { Injectable } from '@angular/core';
import { AccountApiService } from './account-api.service';
import { IChangePwdRequest, ILoginRequest, ISignupRequest } from './account.response';

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

    changePassword(reqObj: IChangePwdRequest) {
        return this.accountAPIService.changePassword(reqObj);
    }
}
