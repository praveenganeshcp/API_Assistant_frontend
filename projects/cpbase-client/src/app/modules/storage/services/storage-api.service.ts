import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIURL } from '../../shared/utilities/api-urls';
import { IObject } from './object.model';

@Injectable({
  providedIn: 'root'
})
export class StorageAPIService {

    constructor(private http: HttpClient) { }

    fetchDirectories(projectId: string, path: string) {
        let params = new HttpParams();
        let headers = new HttpHeaders();
        headers = headers.set('project_auth', projectId);
        params = params.append('path', path);
        return this.http.get<IObject[]>(APIURL.DIRECTORIES, {params, headers});
    }

    fileUpload(projectId: string, formData: FormData) {
      console.log(projectId)
      let headers = new HttpHeaders();
      headers = headers.append('project_auth', projectId);
      return this.http.post<{success: boolean, path:string}>(APIURL.STORAGE, formData, {headers});
    }
}
