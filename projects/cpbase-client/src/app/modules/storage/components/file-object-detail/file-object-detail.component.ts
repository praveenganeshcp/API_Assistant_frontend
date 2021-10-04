import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { IFileObject } from '../../pages/filesystem/file-object.model';

@Component({
  selector: 'app-file-object-detail',
  templateUrl: './file-object-detail.component.html',
  styleUrls: ['./file-object-detail.component.scss']
})
export class FileObjectDetailComponent implements OnInit {

    @Input() fileObject: IFileObject;

    @Output() openDirectory = new EventEmitter<string>();

    constructor() { }

    ngOnInit(): void {
    }

    triggerOpenDirectory() {
        this.openDirectory.emit(this.fileObject.path+'/'+this.fileObject.name);
    }

}
