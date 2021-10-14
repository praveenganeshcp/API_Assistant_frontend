import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../services/app-settings/app-settings.service';

@Component({
  selector: 'app-app-detail-shell',
  templateUrl: './app-detail-shell.component.html',
  styleUrls: ['./app-detail-shell.component.scss']
})
export class AppDetailShellComponent implements OnInit {

  constructor(public appSettingsService: AppSettingsService) { }

  ngOnInit(): void {
  }

}
