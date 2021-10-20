import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsRoutingModule } from './docs-routing.module';
import { DocHomeComponent } from './pages/doc-home/doc-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DocHomeComponent],
  imports: [
    CommonModule,
    DocsRoutingModule,
    SharedModule
  ]
})
export class DocsModule { }
