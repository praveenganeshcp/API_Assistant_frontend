import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageRoutingModule } from './storage-routing.module';
import { FilesystemComponent } from './pages/filesystem/filesystem.component';


@NgModule({
  declarations: [FilesystemComponent],
  imports: [
    CommonModule,
    StorageRoutingModule
  ]
})
export class StorageModule { }
