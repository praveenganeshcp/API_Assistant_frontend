import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

	private appName: string;
	private inDarkTheme: boolean;
	private appSlogan: string;
	private appVersion: string;
	
	constructor() { 
		this.appName = 'CPBase',
		this.inDarkTheme = false;
		this.appSlogan = 'Manage Backend from your Frontend';
		this.appVersion = '1.0.0';
	}

	setAppTheme(enableDarkMode: boolean) {
		this.inDarkTheme = enableDarkMode;
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
}
