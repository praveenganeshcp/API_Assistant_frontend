import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppSettingsService } from '../../services/app-settings/app-settings.service';

@Directive({
  selector: '[appThemedBtn]'
})
export class ThemedBtnDirective implements OnInit,OnDestroy {

	private htmlElement: HTMLElement;
	private themeSubscription: Subscription;
	@Input() isWarning: boolean; 

	constructor(private element: ElementRef, private appSettingsService: AppSettingsService) {
		this.htmlElement = this.element.nativeElement; 
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
		this.htmlElement.style.padding = '2% 4%';
		this.htmlElement.style.borderRadius = '5px';
		this.htmlElement.style.border = 'none';
		this.htmlElement.style.color = 'white';
	}

	@HostListener('mouseover') onhover() {
		this.htmlElement.style.fontWeight = 'bolder';
	}

	@HostListener('mouseleave') onLeave() {
		this.htmlElement.style.fontWeight = 'normal';
	}

	setLightTheme() {
		this.htmlElement.style.backgroundColor = this.isWarning ? 'red' : 'blue';
	}

	setDarkTheme() {
		this.htmlElement.style.backgroundColor = this.isWarning ? 'red' : 'black';
	}

	ngOnDestroy() {
		this.themeSubscription.unsubscribe();
	}
}
