import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { LandingComponent } from './components/landing/landing.component';


const routes: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'accounts',
        loadChildren: () => import('./modules/accounts/accounts.module').then(m => m.AccountsModule)
    },
    {
        path: '',
        component: AppShellComponent,
        children: [
            {
                path: 'storage',
                loadChildren: () => import('./modules/storage/storage.module').then(m => m.StorageModule)
            },
            {
                path: 'database',
                loadChildren: () => import('./modules/database/database.module').then(m => m.DatabaseModule)

            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
