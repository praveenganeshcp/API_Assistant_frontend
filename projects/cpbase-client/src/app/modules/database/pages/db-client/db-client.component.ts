import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-db-client',
  templateUrl: './db-client.component.html',
  styleUrls: ['./db-client.component.scss']
})
export class DbClientComponent implements OnInit {

    collectionList: string[];
    selectedCollection: string;

    constructor() { 
    }

    ngOnInit(): void {
        this.fetchCollections();
    }

    fetchCollections() {
        this.collectionList = [];
        for(let i=0;i<30;i++) {
            this.collectionList.push('Collection '+i);
        }
        this.selectedCollection = this.collectionList[0];
    }

    changeCollection(collectionName: string) {
        this.selectedCollection = collectionName;
    }

    executeQuery(event: {action: string, data: string}) {
        let { action, data } = event;
        let reqObj = {
            collectionName: this.selectedCollection,
            action,
            data: JSON.stringify(data)
        }
        console.log(reqObj)
    }

}
