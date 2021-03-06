import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-db-operation',
  templateUrl: './db-operation.component.html',
  styleUrls: ['./db-operation.component.scss']
})
export class DbOperationComponent implements OnInit {

    dbOperations: string[];
    selectedOperation: string;
    @Input() dbOperationResult: any;
    dbQueryInput: string;

    @Output() runQuery = new EventEmitter<{action: string, data: string}>();

    constructor(private toastr: ToastrService) { 
        this.dbQueryInput = "{}";
        this.dbOperations = ['findOne', 'find', 'insertOne', 'insertMany', 'updateOne', 'updateMany', 'aggregate', 'deleteOne', 'deleteMany'];
        this.selectedOperation = 'find';
    }

    ngOnInit(): void {
    }

    operationChanged(operation: string) {
        this.selectedOperation = operation;
        this.dbQueryInput = "{}";
    }

    fetchResults() {
        try {
            this.runQuery.emit({action: this.selectedOperation, data: JSON.parse(this.dbQueryInput)});
        }
        catch(err) {
            this.toastr.error(err.toString());
        }
    }

}
