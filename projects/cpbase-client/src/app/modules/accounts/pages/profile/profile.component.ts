import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../../../shared/services/localstorage/localstorage.service';
import { IAuthUser } from '../../services/account.response';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

	authUser: IAuthUser;

	constructor(private localStorageService: LocalstorageService) { 
		this.authUser = this.localStorageService.getAuthUser();
		console.log(this.authUser);
	}

	ngOnInit(): void {
	}

}
