import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AccountShellComponent } from './components/account-shell/account-shell.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { UserAccountShellComponent } from './components/user-account-shell/user-account-shell.component';


@NgModule({
  declarations: [SignupComponent, LoginComponent, ForgotPasswordComponent, AccountShellComponent, ProfileComponent, ChangePasswordComponent, UserAccountShellComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    SharedModule
  ]
})
export class AccountsModule { }
