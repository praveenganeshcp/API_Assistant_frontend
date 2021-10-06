import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

    constructor(private applicationService: ApplicationService, private toastr: ToastrService) { 
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
                this.inProgress = false;
            },
            (err) => {
                this.toastr.error('Error in fetching apps', 'Failed');
                this.inProgress = false;
            },
        )
    }

    createApp() {
        if(!this.appName) {
            this.toastr.warning('Enter Application name', 'Warning');
            return;
        }
        this.inProgress = true;
        this.applicationService.createApp(this.appName).subscribe(
            (response) => {
                this.toastr.success('Application created', 'Success');
                this.inProgress = false;
                console.log(response);
                this.appName = '';
                this.inCreateAppMode = false;
                this.fetchApps();
            },
            err => {
                this.inProgress = false;
                this.toastr.error(err, 'Error');
            },
        )
    }

}
