import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IObject } from '../../services/object.model';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-filesystem',
  templateUrl: './filesystem.component.html',
  styleUrls: ['./filesystem.component.scss']
})
export class FilesystemComponent implements OnInit {

    fileObjects: IObject[];
    selectedPath: string;
    projectId: string;

    constructor(private storageService: StorageService, private activatedRoute: ActivatedRoute, 
        private toastr: ToastrService) {
        this.fileObjects = [];
        this.selectedPath = '';
     }

    ngOnInit(): void {
        this.projectId = this.activatedRoute.parent.parent.snapshot.params['app_id'];
        this.fetchDirectories();
    }

    fetchDirectories() {
        this.fileObjects = [];
        this.storageService.fetchDirectories(this.projectId, this.selectedPath).subscribe(
            (objects) => {
                this.fileObjects = objects;
            },
            err => {
                console.error(err);
            }
        )
    }

    selectPath(index: number) {
       this.selectedPath = this.selectedPath.split('/').slice(0, index+1).join('/');
        this.fetchDirectories();
    }

    triggerOpenDirectory(path: string) {
        this.selectedPath = this.selectedPath + '/' + path;
        this.fetchDirectories();
    }

    fileUpload(fileObj: FileList) {
        let formData = new FormData();
        formData.append('path', this.selectedPath == '' ? '/' : this.selectedPath);
        formData.append('file', fileObj.item(0));
        this.storageService.fileUpload(this.projectId, formData).subscribe(
            (response) => {
                this.fetchDirectories();
            },
            err => {
                console.error(err);
            }
        )
    }

    addFolder(folderName: string) {
        this.storageService.createDirectory(this.projectId, this.selectedPath, folderName).subscribe(
            (response) => {
                this.toastr.success(response, 'success');
                this.fileObjects.push({name: folderName, isFile: false});
            },
            err => {
                console.log(err);
                this.toastr.error(err, 'Error');
            }
        )
    }

}
