import { Directive, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppSettingsService } from '../../services/app-settings/app-settings.service';

@Directive({
  selector: '[appThemedInp]'
})
export class ThemedInpDirective {

	private htmlElement: HTMLElement;
	private themeSubscription: Subscription;

	constructor(private elementRef: ElementRef, private appSettingsService: AppSettingsService) { 
		this.htmlElement = this.elementRef.nativeElement;
	}

	ngOnInit() {
		this.setGenericStyles();
		if(this.appSettingsService.isDarkModeEnabled()) {
			this.setDarkTheme();
		}
		else {
			this.setLightTheme();
		}
		this.themeSubscription = this.appSettingsService.watchAppThemeChanges().subscribe(
			value => {
				if(value == true) {
					this.setDarkTheme();
				}
				else {
					this.setLightTheme();
				}
			}
		)
	}

	setGenericStyles() {
		this.htmlElement.style.padding = '3% 2%';
		this.htmlElement.style.border = 'none';
		this.htmlElement.style.borderRadius = '0px';
		this.htmlElement.style.outline = 'none';
	}

	setLightTheme() {
		this.htmlElement.style.backgroundColor = 'wheat';
		this.htmlElement.style.color = 'black';
		this.htmlElement.style.borderBottom = '2px solid brown'
	}

	setDarkTheme() {
		this.htmlElement.style.backgroundColor = 'brown';
		this.htmlElement.style.color = 'white';
		this.htmlElement.style.borderBottom = '2px solid wheat'
	}

	ngOnDestroy() {
		this.themeSubscription.unsubscribe();
	}




}
