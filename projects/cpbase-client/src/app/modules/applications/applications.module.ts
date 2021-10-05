import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ApplicationCardComponent } from './components/application-card/application-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DashboardComponent, ApplicationCardComponent],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    SharedModule
  ]
})
export class ApplicationsModule { }
