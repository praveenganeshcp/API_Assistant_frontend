import { Injectable } from '@angular/core';
import { StorageAPIService } from './storage-api.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

    constructor(private storageAPIService: StorageAPIService) { }

    fetchDirectories(projectId: string, path: string) {
        return this.storageAPIService.fetchDirectories(projectId, path);
    }
}
