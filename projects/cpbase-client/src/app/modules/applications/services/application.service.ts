import { Injectable } from '@angular/core';
import { ApplicationApiService } from './application-api.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

    constructor(private applicationAPIService: ApplicationApiService) { }

    fetchApps() {
        return this.applicationAPIService.fetchApplications();
    }

    createApp(appName: string) {
        return this.applicationAPIService.createApp({name: appName});
    } 

    fetchAppDetail(appId: string) {
        return this.applicationAPIService.fetchAppDetail(appId);
    }
}
