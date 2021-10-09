import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { APIURL } from '../../shared/utilities/api-urls';
import { IAppDetail, IApplication } from './application.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationApiService {

    constructor(private http: HttpClient) { }

    fetchApplications() {
        return this.http.get<IApplication[]>(APIURL.APPS);
    }

    createApp(reqData: {name: string}) {
        return this.http.post<IApplication>(APIURL.APPS, reqData)
    }

    fetchAppDetail(appId: string) {
        let appDetail: IAppDetail = {
            _id: "sssssssss0",
            app_no: 123444,
            name: "sss",
            created_on: new Date(),
            updated_on: null,
            no_of_collections: 10,
            no_of_users: 200
        }
        return of(appDetail);
    }
}
