import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IApplication } from '../../pages/dashboard/application.model';

@Component({
  selector: 'app-application-card',
  templateUrl: './application-card.component.html',
  styleUrls: ['./application-card.component.scss']
})
export class ApplicationCardComponent implements OnInit {

    @Input() application: IApplication;

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    viewApp() {
        this.router.navigate(['applications', this.application._id, 'storage', 'filesystem']);
    }

}
