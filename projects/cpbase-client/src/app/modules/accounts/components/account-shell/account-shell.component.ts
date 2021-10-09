import { Component, OnInit } from '@angular/core';
import { appConstants } from 'projects/cpbase-client/src/app/app.constants';

@Component({
  selector: 'app-account-shell',
  templateUrl: './account-shell.component.html',
  styleUrls: ['./account-shell.component.scss']
})
export class AccountShellComponent implements OnInit {

    appConst: any;
    constructor() {
        this.appConst = appConstants;
    }

    ngOnInit(): void {
    }

}
