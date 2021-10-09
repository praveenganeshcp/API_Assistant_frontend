import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsRoutingModule } from './docs-routing.module';
import { DocHomeComponent } from './pages/doc-home/doc-home.component';


@NgModule({
  declarations: [DocHomeComponent],
  imports: [
    CommonModule,
    DocsRoutingModule
  ]
})
export class DocsModule { }
