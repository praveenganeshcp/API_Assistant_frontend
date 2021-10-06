import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIURL } from '../../shared/utilities/api-urls';
import { IApplication } from './application.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationApiService {

    constructor(private http: HttpClient) { }

    fetchApplications() {
        return this.http.get<IApplication[]>(APIURL.FETCH_APPS);
    }
}
