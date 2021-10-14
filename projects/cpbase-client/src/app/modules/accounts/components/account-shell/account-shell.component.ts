import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../../shared/services/app-settings/app-settings.service';

@Component({
  selector: 'app-account-shell',
  templateUrl: './account-shell.component.html',
  styleUrls: ['./account-shell.component.scss']
})
export class AccountShellComponent implements OnInit {

    constructor(public appSettingsService: AppSettingsService) { }

    ngOnInit(): void {
    }

}
