import { Injectable } from '@angular/core';
import { AccountApiService } from './account-api.service';
import { ISignupRequest } from './account.response';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

    constructor(private accountAPIService: AccountApiService) { }

    createAccount(newUser: ISignupRequest) {
        return this.accountAPIService.createAccount(newUser);
    }
}
