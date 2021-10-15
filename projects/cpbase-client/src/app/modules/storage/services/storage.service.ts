import { Injectable } from '@angular/core';
import { ICreateDir } from './object.model';
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

    fetchObjectStat(projectId: string, path: string) {
      return this.storageAPIService.fetchObjectStat(projectId, path);
    }

    createDirectory(projectId: string, rootPath: string, dirName: string) {
      let reqObj: ICreateDir = {
        rootPath, dirName
      }
      return this.storageAPIService.createDirectory(projectId, reqObj);
    }

    removeObject(projectId: string, path: string) {
      return this.storageAPIService.removeObject(projectId, path);
    }
}
