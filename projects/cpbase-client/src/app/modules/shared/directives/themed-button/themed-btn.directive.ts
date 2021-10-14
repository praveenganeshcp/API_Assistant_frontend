import { Directive, ElementRef, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppSettingsService } from '../../services/app-settings/app-settings.service';

@Directive({
  selector: '[appThemedBtn]'
})
export class ThemedBtnDirective implements OnDestroy {

	private htmlElement: HTMLElement;
	private themeSubscription: Subscription;

	constructor(private element: ElementRef, private appSettingsService: AppSettingsService) {
		this.htmlElement = this.element.nativeElement; 
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

	setLightTheme() {
		// this.htmlElement.style.backgroundColor = 'black';
	}

	setDarkTheme() {
		// this.htmlElement.style.backgroundColor = 'white';
	}

	ngOnDestroy() {
		this.themeSubscription.unsubscribe();
	}
}
