import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocHomeComponent } from './pages/doc-home/doc-home.component';


const routes: Routes = [
    {
        path: 'home',
        component: DocHomeComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }
