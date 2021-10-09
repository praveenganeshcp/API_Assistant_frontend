import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIURL } from '../../../shared/utilities/api-urls';

@Component({
  selector: 'app-doc-home',
  templateUrl: './doc-home.component.html',
  styleUrls: ['./doc-home.component.scss']
})
export class DocHomeComponent implements OnInit {

    docs: any[];
    projectId: string;

    constructor(private activatedRoute: ActivatedRoute) { 
        this.projectId = this.activatedRoute.parent.parent.snapshot.params['app_id'];
        let allowedOps = ['findOne', 'find', 'insertOne', 'insertMany', 'updateOne', 'updateMany', 'aggregate', 'deleteOne', 'deleteMany'];
        this.docs = [
            {
                title: 'Global API',
                url: APIURL.GLOBAL,
                method: 'POST',
                dataLocation: 'Body',
                dataValue: {
                    collectionName: 'sample',
                    action: 'find',
                    data: {}
                },
                dataTypes: [
                    { variable: 'collectionName', type: 'string' },
                    { variable: 'action', type: allowedOps.join(' | ')},
                    { variable: 'data', type: 'JSON Object | Array' }
                ],
                description: 'Perform CRUD operations using Global API. In the request body, specify collectionName where to run the queries, action specifies the operation performed on a collection and data can represent query or collection input data',
                response: 'MongoDB results based on the action'
            },
            {
                title: 'Fetch Collections API',
                url: APIURL.COLLECTIONS,
                method: 'GET',
                description: 'Fetch the list of collections in your database',
                response: 'Array of strings'
            },
            {
                title: 'Fetch Directories API',
                url: APIURL.DIRECTORIES,
                method: 'GET',
                description: 'Fetch the list of directories in your storage filesystem. Each application has a seperate filesystem',
                response: { name: 'string', isFile: 'boolean' }
            },
            {
                title: 'Storage API',
                url: APIURL.STORAGE,
                method: 'POST',
                dataLocation: 'MULTIPART Body',
                dataValue: 'file: File; path: string',
                description: 'Upload files and store in the cloud. Also specify the path where to store the file',
                response: { name: 'string', isFile: 'boolean' }
            }
        ]
    }

    ngOnInit(): void {
    }

}
