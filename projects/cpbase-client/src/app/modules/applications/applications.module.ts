import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ApplicationCardComponent } from './components/application-card/application-card.component';


@NgModule({
  declarations: [DashboardComponent, ApplicationCardComponent],
  imports: [
    CommonModule,
    ApplicationsRoutingModule
  ]
})
export class ApplicationsModule { }
