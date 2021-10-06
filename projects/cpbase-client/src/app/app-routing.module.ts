import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { LandingComponent } from './components/landing/landing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './modules/shared/guards/auth.guard';


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
        path: 'applications',
        loadChildren: () => import('./modules/applications/applications.module').then(m => m.ApplicationsModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'applications/:app_id',
        component: AppShellComponent,
        canActivate: [AuthGuard],
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
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
