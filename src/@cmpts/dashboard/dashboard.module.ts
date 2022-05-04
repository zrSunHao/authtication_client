import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.module.routing';
import { CustomerActivityComponent } from './customer-activity/customer-activity.component';
import { LogActivityComponent } from './log-activity/log-activity.component';
import { ConstraintActivityComponent } from './constraint-activity/constraint-activity.component';
import { WidgetActivityComponent } from './widget-activity/widget-activity.component';
import { DashboardService } from './dashboard.service';
import { SharedModule } from 'src/@sun/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,

    SharedModule,
    DashboardRoutingModule,
  ],
  declarations: [
    DashboardComponent,
    CustomerActivityComponent,
    LogActivityComponent,
    ConstraintActivityComponent,
    WidgetActivityComponent,
  ],
  providers:[
    DashboardService
  ]
})
export class DashboardModule { }
