import { Component, OnInit } from '@angular/core';
import { IApplication } from '../../services/application.model';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    applicationList: IApplication[];
    inCreateAppMode: boolean;
    appName: string;
    inProgress: boolean;

    constructor(private applicationService: ApplicationService) { 
        this.inCreateAppMode = false;
        this.inProgress = false;
    }

    ngOnInit(): void {
        this.fetchApps();
    }

    fetchApps() {
        this.applicationList = [];
        this.inProgress = true;
        this.applicationService.fetchApps().subscribe(
            (apps) => {
                this.applicationList = apps;
            },
            (err) => {
                console.error(err);
            },
            () => {
                this.inProgress = false;
            }
        )
    }

    createApp() {
        if(this.appName == '') {
            return;
        }
        this.inProgress = true;
        this.applicationService.createApp(this.appName).subscribe(
            (response) => {
                console.log(response);
                this.appName = '';
                this.fetchApps();
            },
            err => {
                console.error(err);
            },
            () => {
                this.inProgress = false;
            }
        )
    }

}
