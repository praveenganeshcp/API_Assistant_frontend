import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-collections-list',
  templateUrl: './collections-list.component.html',
  styleUrls: ['./collections-list.component.scss']
})
export class CollectionsListComponent implements OnInit {

    @Input() collections: string[];
    @Input() selectedCollection: string;
    @Output() selectionChanged = new EventEmitter<string>();
    @Output() newCollection = new EventEmitter<string>();

    inNewCollectionMode: boolean;
    newCollectionName: string;

    constructor(private toastr: ToastrService) { 
        this.inNewCollectionMode = false;
        this.newCollectionName = '';
    }

    ngOnInit(): void {
        
    }

    selectCollection(collectionName: string) {
        this.selectionChanged.emit(collectionName)
    }

    addCollection() {
        if(!this.newCollectionName) {
            this.toastr.warning('Enter collection name', 'Warning');
            return;
        }
        else if(this.collections.includes(this.newCollectionName)) {
            this.toastr.warning('Collection name already exists', 'Error');
            return;
        }
        this.newCollection.emit(this.newCollectionName);
        this.newCollectionName = '';
        this.inNewCollectionMode = false;
    }

}
