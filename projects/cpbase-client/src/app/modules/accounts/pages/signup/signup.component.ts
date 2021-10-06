import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../../shared/services/localstorage/localstorage.service';
import { CustomValidator } from '../../../shared/utilities/custom-validators';
import { AccountServiceService } from '../../services/account-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private accountService: AccountServiceService, private localStorageService: LocalstorageService, private router: Router) { 
        this.signupForm = this.formBuilder.group({
            username: this.formBuilder.control('', [Validators.required]),
            mailId: this.formBuilder.control('', [Validators.required, Validators.email]),
            password: this.formBuilder.control('', [Validators.required, CustomValidator.strongPassword])
        })
    }

    ngOnInit(): void {
    }

    createAccount() {
        if(this.signupForm.valid) {
            this.accountService.createAccount(this.signupForm.value).subscribe(
                response => {
                    this.localStorageService.setAuthUser(response.user);
                    this.localStorageService.setAuthToken(response.token);
                    this.router.navigate(['applications']);
                },
                (err: string) => {
                    console.error(err);
                }
            )
        }
        else {
            console.error('form invalid');
        }
    }

    get usernameControl() {
        return this.signupForm.get('username');
    }
    
    get mailIdControl() {
        return this.signupForm.get('mailId');
    }

    get passwordControl() {
        return this.signupForm.get('password');
    }

}
