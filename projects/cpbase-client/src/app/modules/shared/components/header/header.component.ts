import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAuthUser } from '../../../accounts/services/account.response';
import { LocalstorageService } from '../../services/localstorage/localstorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    authUser: IAuthUser;

    constructor(private localStorageService: LocalstorageService, private router: Router) { 
        this.authUser = this.localStorageService.getAuthUser();
    }

    ngOnInit(): void {
    }

    logoutUser() {
        this.localStorageService.removeLoginData();
        this.router.navigate(['accounts', 'login']);
    }
}
