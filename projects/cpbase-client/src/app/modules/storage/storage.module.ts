import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageRoutingModule } from './storage-routing.module';
import { FilesystemComponent } from './pages/filesystem/filesystem.component';
import { FileExplorerComponent } from './components/file-explorer/file-explorer.component';
import { FileObjectDetailComponent } from './components/file-object-detail/file-object-detail.component';


@NgModule({
  declarations: [FilesystemComponent, FileExplorerComponent, FileObjectDetailComponent],
  imports: [
    CommonModule,
    StorageRoutingModule
  ]
})
export class StorageModule { }
