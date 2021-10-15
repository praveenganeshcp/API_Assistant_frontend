import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIURL } from '../../shared/utilities/api-urls';
import { ICreateDir, IFileStat, IObject } from './object.model';

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
      return this.http.post<string>(APIURL.STORAGE, formData, {headers});
    }

    createDirectory(projectId: string, reqObj: ICreateDir) {
      let headers = new HttpHeaders();
      headers = headers.append('project_auth', projectId);
      return this.http.post<string>(APIURL.OBJECT, reqObj, {headers});
    }

    fetchObjectStat(projectId: string, path: string) {
      let headers = new HttpHeaders();
      headers = headers.append('project_auth', projectId);
      let params = new HttpParams();
      params = params.append('path', path);
      return this.http.get<IFileStat | string>(APIURL.OBJECT, {params, headers});
    }

    removeObject(projectId: string, path: string) {
      let headers = new HttpHeaders();
      headers = headers.append('project_auth', projectId);
      let params = new HttpParams();
      params = params.append('path', path);
      return this.http.delete<string>(APIURL.OBJECT, {params, headers});
    }
}
