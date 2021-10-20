import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppSettingsService } from '../../../shared/services/app-settings/app-settings.service';
import { IApplication } from '../../services/application.model';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    applicationList: IApplication[];
    filteredAppList: IApplication[];
    inCreateAppMode: boolean;
    appName: string;
    inProgress: boolean;

    constructor(private applicationService: ApplicationService, private toastr: ToastrService, private router: Router,
        public appSettingsService: AppSettingsService) { 
        this.inCreateAppMode = false;
        this.inProgress = false;
        this.applicationList = [];
        this.filteredAppList = [];
    }

    ngOnInit(): void {
        this.fetchApps();
    }

    searchApps(value: string) {
        if(value == '') {
            this.filteredAppList = this.applicationList.slice();
        }
        else {
            this.filteredAppList = this.applicationList.filter(app => {
                return app.name.toLowerCase().startsWith(value.toLowerCase());
            })
        }
    }

    fetchApps() {
        this.applicationList = [];
        this.inProgress = true;
        this.applicationService.fetchApps().subscribe(
            (apps) => {
                this.applicationList = apps;
                this.filteredAppList = apps;
                this.inProgress = false;
            },
            (err) => {
                this.toastr.error('Error in fetching apps', 'Failed');
                this.inProgress = false;
            },
        )
    }

    viewApp(appId: string) {
        this.router.navigate(['applications', appId, 'database', 'client']);
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
