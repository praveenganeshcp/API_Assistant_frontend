import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppSettingsService } from '../../../shared/services/app-settings/app-settings.service';
import { APIURL } from '../../../shared/utilities/api-urls';

@Component({
  selector: 'app-doc-home',
  templateUrl: './doc-home.component.html',
  styleUrls: ['./doc-home.component.scss']
})
export class DocHomeComponent implements OnInit {

    docs: any[];
    projectId: string;
    appUrls: any = APIURL;

    constructor(private activatedRoute: ActivatedRoute, public appSettingsService: AppSettingsService) { 
        this.projectId = "Your app secret";
        let allowedOps = ['findOne', 'find', 'insertOne', 'insertMany', 'updateOne', 'updateMany', 'aggregate', 'deleteOne', 'deleteMany'];
        this.docs = [
            {
                title: 'Signup API',
                url: APIURL.CPBASE_SIGNUP,
                method: 'POST',
                dataLocation: 'body',
                dataValue: {
                    emailId: 'user@mail.com',
                    password: 'Strong Password'
                },
                dataTypes: [
                    { variable: 'emailId', type: 'string' },
                    { variable: 'password', type: 'string' },
                ],
                description: `${appSettingsService.getAppName()} provides standard signup API helps to users to create account in your application`,
                response: 'A user object is created with unique id is returned',
                note: 'You can add extra fields compatible with MongoDB BSON types. Password field must satisfy strong password validation (1 cap, 1 small, 1 digit, 1 special char)'
            },
            {
                title: 'Login API',
                url: APIURL.CPBASE_LOGIN,
                method: 'POST',
                dataLocation: 'body',
                dataValue: {
                    emailId: 'user@mail.com',
                    password: 'Strong Password'
                },
                dataTypes: [
                    { variable: 'emailId', type: 'string' },
                    { variable: 'password', type: 'string' },
                ],
                description: `${appSettingsService.getAppName()} provides standard login API that returns user object when correct mailId and password is provided by the user`,
                response: 'The saved user object is returned on successful login',
            },
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
                response: 'MongoDB results based on the action',
                note: 'For updateOne and updateMany queries, specify filter and update objects inside data objects similiar to MongoDB update arguments'
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
                dataLocation: 'query params',
                dataValue: '?path=/images',
                description: 'Fetch the list of directories in your storage filesystem. Each application has a seperate filesystem',
                response: [ { name: 'string', isFile: 'boolean' } ]
            },
            {
                title: 'Storage API',
                url: APIURL.STORAGE,
                method: 'POST',
                dataLocation: 'MULTIPART Body',
                dataValue: 'file: File; path: string',
                description: 'Upload files and store in the cloud. Also specify the path where to store the file',
                response: { path: 'string' }
            }
        ]
    }

    ngOnInit(): void {
    }

}
