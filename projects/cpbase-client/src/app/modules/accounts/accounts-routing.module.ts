import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountShellComponent } from './components/account-shell/account-shell.component';
import { UserAccountShellComponent } from './components/user-account-shell/user-account-shell.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [
    {
        path: '',
        component: AccountShellComponent,
        children: [
            {
                path: 'signup',
                component: SignupComponent
            },
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent
            }
        ]
    },
    {
        path: 'settings',
        component: UserAccountShellComponent,
        children: [
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'change-password',
                component: ChangePasswordComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
