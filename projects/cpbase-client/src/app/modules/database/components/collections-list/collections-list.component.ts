import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-collections-list',
  templateUrl: './collections-list.component.html',
  styleUrls: ['./collections-list.component.scss']
})
export class CollectionsListComponent implements OnInit {

    @Input() collections: string[];
    @Input() selectedCollection: string;
    @Output() selectionChanged = new EventEmitter<string>();

    constructor() { }

    ngOnInit(): void {
        
    }

    selectCollection(collectionName: string) {
        this.selectionChanged.emit(collectionName)
    }

}
