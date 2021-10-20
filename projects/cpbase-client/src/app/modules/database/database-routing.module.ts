import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DbClientComponent } from './pages/db-client/db-client.component';


const routes: Routes = [
    {
        path: 'client',
        component: DbClientComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabaseRoutingModule { }
