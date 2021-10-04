import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFileObject } from '../../pages/filesystem/file-object.model';

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.scss']
})
export class FileExplorerComponent implements OnInit {

    @Input() fileObjects: IFileObject[];

    @Output() openDirectory = new EventEmitter<string>();

    constructor() { }

    ngOnInit(): void {
    }

    triggerOpenDirectory(path: string) {
        this.openDirectory.emit(path)
    }

}
