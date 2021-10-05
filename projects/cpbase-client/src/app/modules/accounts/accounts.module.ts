import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AccountShellComponent } from './components/account-shell/account-shell.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SignupComponent, LoginComponent, ForgotPasswordComponent, AccountShellComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    SharedModule
  ]
})
export class AccountsModule { }
