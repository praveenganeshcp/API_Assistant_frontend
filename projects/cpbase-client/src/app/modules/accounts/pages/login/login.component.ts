import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private router: Router, private formBuilder: FormBuilder) { 
        this.loginForm = this.formBuilder.group({
            mailId: this.formBuilder.control('', [Validators.required, Validators.email]),
            password: this.formBuilder.control('', [Validators.required])
        })
    }

    ngOnInit(): void {
    }

    loginAccount() {
        console.log(this.loginForm.value);
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
