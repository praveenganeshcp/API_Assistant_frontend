import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-db-operation',
  templateUrl: './db-operation.component.html',
  styleUrls: ['./db-operation.component.scss']
})
export class DbOperationComponent implements OnInit {

    dbOperations: string[];
    selectedOperation: string;
    dbOperationResult;
    dbQueryInput: string;

    @Output() runQuery = new EventEmitter<{action: string, data: string}>();

    constructor() { 
        this.dbQueryInput = '{}';
        this.dbOperations = ['find', 'findOne', 'insertOne'];
        this.selectedOperation = 'find';

        this.dbOperationResult = {
            "_id" : "5f45f0b316b3a63983c22fb0",
            "sub" : "auth0|5f45f01182d0cc006dd63276",
            "nickname" : "bhargav",
            "picture" : "https://s.gravatar.com/avatar/4eae7b9a974eee96a9112e6626ce2b7f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fbh.png",
            "updated_at" : "2020-08-26T05:18:17.047Z",
            "isPasswordFilled" : true,
            "first_name" : "bhargav",
            "last_name" : "",
            "mail" : "bhargav@textmercato.com",
            "phone" : 9876543211.0,
            "roles" : [ 
                "client", 
                "contentManager", 
                "production-manager"
            ],
            "clients" : [ 
                "5f45f0b316b3a63983c22fb0", 
                "5f493909a6f44079b036d7b4"
            ],
            "clientsHandling" : [ 
                "5f45f0b316b3a63983c22fb0", 
                "5f493909a6f44079b036d7b4"
            ],
            "user_id" : 215,
            "name" : "bhargav",
            "org_name" : "Text Mercato",
            "org_id" : "5f2a9f4ceb6cc94b5cb9b93a",
            "convertedId" : "5f45f0b316b3a63983c22fb0",
            "updatedon" : 1600883328566.0
        }
    }

    ngOnInit(): void {
    }

    operationChanged(operation: string) {
        this.selectedOperation = operation;
    }

    fetchResults() {
        this.runQuery.emit({action: this.selectedOperation, data: JSON.parse(this.dbQueryInput)});
    }

}
