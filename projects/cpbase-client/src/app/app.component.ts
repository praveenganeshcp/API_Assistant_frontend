import { Component } from '@angular/core';
import { AppSettingsService } from './modules/shared/services/app-settings/app-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'cpbase-client';

	constructor(public appSettingsService: AppSettingsService) {}

	isLoading() {
		return this.appSettingsService.getNoOfInProgressReq() > 0;
	}
}
