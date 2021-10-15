import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IObject } from '../../services/object.model';

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.scss']
})
export class FileExplorerComponent implements OnInit {

    @Input() fileObjects: IObject[];

    inAddMode: boolean;
    folderName: string;

    @Output() openDirectory = new EventEmitter<string>();
    @Output() addFolder = new EventEmitter<string>();

    constructor() { 
      this.inAddMode = false;
      this.folderName = '';
    }

    ngOnInit(): void {
    }

    triggerOpenDirectory(path: string) {
        this.openDirectory.emit(path)
    }

    addDirectory() {
      this.addFolder.emit(this.folderName);
      this.folderName = '';
      this.inAddMode = false;
    }

}
