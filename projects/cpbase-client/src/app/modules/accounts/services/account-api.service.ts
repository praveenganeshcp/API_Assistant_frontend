import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIURL } from '../../shared/utilities/api-urls';
import { ISignupRequest, ISignupResponse } from './account.response';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {

    constructor(private http: HttpClient) { }

    createAccount(userData: ISignupRequest) {
        return this.http.post<ISignupResponse>(APIURL.SIGNUP, userData);
    }
}
