import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIURL } from '../../shared/utilities/api-urls';
import { IChangePwdRequest, ILoginRequest, ILoginResponse, ISignupRequest, ISignupResponse } from './account.response';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {

    constructor(private http: HttpClient) { }

    createAccount(userData: ISignupRequest) {
        return this.http.post<ISignupResponse>(APIURL.SIGNUP, userData);
    }

    loginUser(loginData: ILoginRequest) {
        return this.http.post<ILoginResponse>(APIURL.LOGIN, loginData);
    }

    changePassword(reqObj: IChangePwdRequest) {
        return this.http.post<string>(APIURL.CHANGE_PSWD, reqObj);
    }
}
