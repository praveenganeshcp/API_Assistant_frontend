import { Injectable } from '@angular/core';
import { DbApiService } from './db-api.service';
import { IGlobalRequest } from './db.models';

@Injectable({
  providedIn: 'root'
})
export class DbService {

    constructor(private dbApiService: DbApiService) { }

    fetchCollections(projectId: string) {
        return this.dbApiService.fetchCollections(projectId);
    }

    executeQuery(projectId: string, reqObj: IGlobalRequest) {
        return this.dbApiService.executeQuery(projectId, reqObj);
    }
}
