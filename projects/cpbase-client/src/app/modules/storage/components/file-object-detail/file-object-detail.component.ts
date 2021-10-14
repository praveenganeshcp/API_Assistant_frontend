import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { AppSettingsService } from '../../../shared/services/app-settings/app-settings.service';
import { IObject } from '../../services/object.model';

@Component({
  selector: 'app-file-object-detail',
  templateUrl: './file-object-detail.component.html',
  styleUrls: ['./file-object-detail.component.scss']
})
export class FileObjectDetailComponent implements OnInit {

    @Input() fileObject: IObject;

    @Output() openDirectory = new EventEmitter<string>();

    constructor(public appSettingsService: AppSettingsService) { }

    ngOnInit(): void {
    }

    triggerOpenDirectory() {
        this.openDirectory.emit(this.fileObject.name);
    }

}
