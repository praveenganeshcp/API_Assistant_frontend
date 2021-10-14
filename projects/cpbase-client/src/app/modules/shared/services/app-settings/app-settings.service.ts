import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

	private appName: string;
	private inDarkTheme: boolean;
	private appSlogan: string;
	private appVersion: string;
	private appThemeChanges: Subject<boolean>;
	private noOfRequestInProgress: number;
	
	constructor() { 
		this.appName = 'CPBase',
		this.inDarkTheme = false;
		this.appSlogan = 'Manage Backend from your Frontend';
		this.appVersion = '1.0.0';
		this.appThemeChanges = new Subject();
		this.noOfRequestInProgress = 0;
	}

	toggleAppTheme() {
		this.inDarkTheme = ! this.inDarkTheme;
		this.appThemeChanges.next(this.inDarkTheme);
		console.log(this.inDarkTheme);
	}

	getAppName() {
		return this.appName;
	}

	getAppSlogan() {
		return this.appSlogan;
	}

	getAppVersion() {
		return this.appVersion;
	}

	isDarkModeEnabled() {
		return this.inDarkTheme;
	}

	watchAppThemeChanges() {
		return this.appThemeChanges;
	}

	addRequest() {
		this.noOfRequestInProgress += 1;
	}

	decRequest() {
		this.noOfRequestInProgress -= 1;
	}

	getNoOfInProgressReq() {
		return this.noOfRequestInProgress;
	}
}
