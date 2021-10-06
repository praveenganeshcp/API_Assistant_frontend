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

    constructor(private applicationService: ApplicationService) { }

    ngOnInit(): void {
        this.applicationList = [];
        this.applicationService.fetchApps().subscribe(
            (apps) => {
                this.applicationList = apps;
            },
            (err) => {
                console.error(err);
            }
        )
    }

}
