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

    fileUpload(projectId: string, formData: FormData) {
      return this.storageAPIService.fileUpload(projectId, formData);
    }
}
