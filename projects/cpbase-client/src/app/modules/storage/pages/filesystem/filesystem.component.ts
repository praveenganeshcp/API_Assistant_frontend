import { Component, OnInit } from '@angular/core';
import { IFileObject } from './file-object.model';

@Component({
  selector: 'app-filesystem',
  templateUrl: './filesystem.component.html',
  styleUrls: ['./filesystem.component.scss']
})
export class FilesystemComponent implements OnInit {

    fileObjects: IFileObject[];
    selectedPath: string;

    constructor() {
        this.fileObjects = [];
        this.selectedPath = '';
     }

    ngOnInit(): void {
        this.fetchDirectories();
    }

    fetchDirectories() {
        this.fileObjects = [];
        for(let i=0;i<50;i++) {
            this.fileObjects.push({
                name: `File `+i,
                isFile: i % 2 == 0,
                path: ``
            })
        }
    }

    selectPath(index: number) {
       this.selectedPath = this.selectedPath.split('/').slice(0, index+1).join('/');
        this.fetchDirectories();
    }

    triggerOpenDirectory(path: string) {
        this.selectedPath = this.selectedPath + path;
        console.log(this.selectedPath)
    }

}
