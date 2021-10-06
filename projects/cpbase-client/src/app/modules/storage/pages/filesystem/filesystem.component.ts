import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

    constructor(private storageService: StorageService, private activatedRoute: ActivatedRoute) {
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

}
