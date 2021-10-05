import { Component, OnInit } from '@angular/core';
import { IApplication } from './application.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    applicationList: IApplication[];

    constructor() { }

    ngOnInit(): void {
        this.applicationList = [];
        for(let i=0;i<10;i++) {
            this.applicationList.push({
                _id: "1000"+i,
                name: 'Application 1',
                collections: 10,
                created_on: new Date()
            })
        }
    }

}
