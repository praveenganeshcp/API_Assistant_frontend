import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../../shared/services/localstorage/localstorage.service';
import { CustomValidator } from '../../../shared/utilities/custom-validators';
import { AccountServiceService } from '../../services/account-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private router: Router, private formBuilder: FormBuilder, private accountService: AccountServiceService, private localStorageService: LocalstorageService) { 
        this.loginForm = this.formBuilder.group({
            mailId: this.formBuilder.control('', [Validators.required, Validators.email]),
            password: this.formBuilder.control('', [Validators.required, CustomValidator.strongPassword])
        })
    }

    ngOnInit(): void {
    }

    loginAccount() {
        this.loginForm.markAllAsTouched();
        if(this.loginForm.valid) {
            this.accountService.loginUser(this.loginForm.value).subscribe(
                response => {
                    this.localStorageService.setAuthUser(response.user);
                    this.localStorageService.setAuthToken(response.token);
                    this.router.navigate(['applications']);
                },
                err => {
                    console.error(err);
                }
            )
        }   
        else {
            console.error('Invalid form');
        }
    }

    get mailIdControl() {
        return this.loginForm.get('mailId');
    }

    get passwordControl() {
        return this.loginForm.get('password');
    }

    navigate() {
        this.router.navigate(['applications'])
    }

}
