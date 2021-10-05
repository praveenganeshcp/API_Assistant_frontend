import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from '../../../shared/utilities/custom-validators';
import { AccountApiService } from '../../services/account-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private accountApiService: AccountApiService) { 
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
            this.accountApiService.createAccount(this.signupForm.value).subscribe(
                response => {
                    console.log(response);
                },
                (err: HttpErrorResponse) => {
                    if(err.error) {
                        console.log(err.error.message);
                    }
                }
            )
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
