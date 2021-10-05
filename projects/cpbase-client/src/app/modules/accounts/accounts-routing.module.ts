import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountShellComponent } from './components/account-shell/account-shell.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
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
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
