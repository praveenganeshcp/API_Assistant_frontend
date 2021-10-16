import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIURL } from '../../shared/utilities/api-urls';
import { IGlobalRequest } from './db.models';

@Injectable({
  providedIn: 'root'
})
export class DbApiService {

    constructor(private http: HttpClient) { }

    fetchCollections(projectId: string) {
        let headers = new HttpHeaders();
        headers = headers.set('app_secret', projectId);
        return this.http.get<string[]>(APIURL.COLLECTIONS, {headers});
    }

    executeQuery(projectId: string, reqObj: IGlobalRequest) {
        let headers = new HttpHeaders();
        headers = headers.set('app_secret', projectId);
        return this.http.post(APIURL.GLOBAL, reqObj, {headers});
    }
}
