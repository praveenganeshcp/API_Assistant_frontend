import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilesystemComponent } from './pages/filesystem/filesystem.component';


const routes: Routes = [
    {
        path: 'filesystem',
        component: FilesystemComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorageRoutingModule { }
