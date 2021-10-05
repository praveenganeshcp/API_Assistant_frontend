import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabaseRoutingModule } from './database-routing.module';
import { DbClientComponent } from './pages/db-client/db-client.component';
import { CollectionsListComponent } from './components/collections-list/collections-list.component';
import { DbOperationComponent } from './components/db-operation/db-operation.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DbClientComponent, CollectionsListComponent, DbOperationComponent],
  imports: [
    CommonModule,
    DatabaseRoutingModule,
    SharedModule
  ]
})
export class DatabaseModule { }
