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
}
