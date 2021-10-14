import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../modules/shared/services/app-settings/app-settings.service';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {

    constructor(public appSettingsService: AppSettingsService) { }

    ngOnInit(): void {
    }

}
