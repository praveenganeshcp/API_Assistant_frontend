import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from '../../../shared/utilities/custom-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { 
        this.signupForm = this.formBuilder.group({
            username: this.formBuilder.control('', [Validators.required]),
            mailId: this.formBuilder.control('', [Validators.required, Validators.email]),
            password: this.formBuilder.control('', [Validators.required, CustomValidator.strongPassword])
        })
    }

    ngOnInit(): void {
    }

    createAccount() {
        this.signupForm.markAllAsTouched();
        console.log(this.signupForm.value);
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
