import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    projectId: string;

    constructor(private dbService: DbService, private toastr: ToastrService, private activatedRoute: ActivatedRoute) { 
        this.dbResult = {};
    }

    ngOnInit(): void {
        this.projectId = this.activatedRoute.parent.parent.snapshot.params['app_id'];
        this.fetchCollections();
    }

    fetchCollections() {
        this.collectionList = [];
        this.dbService.fetchCollections(this.projectId).subscribe(
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
        if(!this.selectedCollection) {
            this.toastr.warning('Select or create a new collection', 'Warning');
            return;
        }
        let { action, data } = event;
        let reqObj = {
            collectionName: this.selectedCollection,
            action,
            data,
        }
        this.dbService.executeQuery(this.projectId, reqObj).subscribe(
            (response) => {
                this.dbResult = response;
            },
            err => {
                this.toastr.error(err, 'Failed');
            }
        )
    }

}
