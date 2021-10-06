import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    continueUrl: string;

    constructor(private router: Router, private formBuilder: FormBuilder, private accountService: AccountServiceService, private localStorageService: LocalstorageService, private activatedRoute: ActivatedRoute) { 
        this.loginForm = this.formBuilder.group({
            mailId: this.formBuilder.control('', [Validators.required, Validators.email]),
            password: this.formBuilder.control('', [Validators.required, CustomValidator.strongPassword])
        })
    }

    ngOnInit(): void {
        this.continueUrl = this.activatedRoute.snapshot.queryParams['continue'];
    }

    loginAccount() {
        this.loginForm.markAllAsTouched();
        if(this.loginForm.valid) {
            this.accountService.loginUser(this.loginForm.value).subscribe(
                response => {
                    this.localStorageService.setAuthUser(response.user);
                    this.localStorageService.setAuthToken(response.token);
                    if(this.continueUrl) {
                        this.router.navigateByUrl(this.continueUrl);
                    }
                    else {
                        this.router.navigate(['applications']);
                    }
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
