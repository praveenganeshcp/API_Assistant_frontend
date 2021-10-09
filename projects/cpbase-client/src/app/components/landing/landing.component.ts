import { Component, OnInit } from '@angular/core';
import { appConstants } from '../../app.constants';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

    appConst: any;
    howItWorks = [];
    features = [];
    constructor() { 
        this.appConst = appConstants;
        this.howItWorks = [
            { title: 'PREPARE QUERIES', description: 'Get form details or query paramters and prepare MongoDB queries in frontend', icon: 'construction' },
            { title: 'EXECUTE', description: `Specify the collection name, operation and send the prepared query to ${appConstants.name} endpoint`, icon: 'storage' },
            { title: 'DISPLAY RESULTS', description: 'Fetch the response of queries and showcase in your frontend', icon: 'format_paint' }
        ]
        this.features = [
            { 
                icon: 'manage_accounts', 
                title: 'Authentication APIs', 
                description: `${appConstants.name} provides tailored APIs for signup and login functionalities. Just integrate and welcome users into your application`
            },
            {
                icon: 'backup',
                title: 'Object Store',
                description: `Most often web applications stores user uploaded files into cloud storage. ${appConstants.name} provides endpoints for managing your file objects`
            },
            {
                icon: 'integration_instructions',
                title: 'MongoDB Queries',
                description: `Perform CRUD operations using MongoDB queries. ${appConstants.name} currently supports 7 operations`
            },
            {
                icon: 'web',
                title: 'Simple UI',
                description: `Create and manage applications with very easy to use UI and smooth performance`
            }
        ]
    }

    ngOnInit(): void {
    }

}
