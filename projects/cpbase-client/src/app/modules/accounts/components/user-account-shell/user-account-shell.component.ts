import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../../shared/services/app-settings/app-settings.service';

@Component({
  selector: 'app-user-account-shell',
  templateUrl: './user-account-shell.component.html',
  styleUrls: ['./user-account-shell.component.scss']
})
export class UserAccountShellComponent implements OnInit {

  appContants: any;
  menuItems: any[];

  constructor(public appSettingsService: AppSettingsService) { 
    this.menuItems = [
      { icon: 'person', view: 'Profile', link: '/accounts/settings/profile' },
      { icon: 'password', view: 'Change password', link: '/accounts/settings/change-password' }
    ]
  }

  ngOnInit(): void {
  }


}
