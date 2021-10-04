import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabaseRoutingModule } from './database-routing.module';
import { DbClientComponent } from './pages/db-client/db-client.component';


@NgModule({
  declarations: [DbClientComponent],
  imports: [
    CommonModule,
    DatabaseRoutingModule
  ]
})
export class DatabaseModule { }
