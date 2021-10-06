import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-db-client',
  templateUrl: './db-client.component.html',
  styleUrls: ['./db-client.component.scss']
})
export class DbClientComponent implements OnInit {

    collectionList: string[];
    selectedCollection: string;
    dbResult: any;

    constructor(private dbService: DbService, private toastr: ToastrService) { 
        this.dbResult = {};
    }

    ngOnInit(): void {
        this.fetchCollections();
    }

    fetchCollections() {
        this.collectionList = [];
        this.dbService.fetchCollections('615696fdd59997615a2b2334').subscribe(
            (collections) => {
                this.collectionList = collections;
                if(this.collectionList.length > 0) {
                    this.selectedCollection = this.collectionList[0];
                }
            },
            err => {
                this.toastr.error('Error in fetching collections', 'Failed');
                this.collectionList = [];
            }
        )
    }

    addCollection(collectionName: string) {
        this.collectionList.push(collectionName);
        this.selectedCollection = collectionName;
    }

    changeCollection(collectionName: string) {
        this.selectedCollection = collectionName;
    }

    executeQuery(event: {action: string, data: string}) {
        let { action, data } = event;
        let reqObj = {
            collectionName: this.selectedCollection,
            action,
            data,
        }
        this.dbService.executeQuery('615696fdd59997615a2b2334', reqObj).subscribe(
            (response) => {
                this.dbResult = response;
            },
            err => {
                console.error(err);
            }
        )
    }

}
