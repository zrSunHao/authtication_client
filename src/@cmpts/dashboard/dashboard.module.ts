import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';

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
    HttpClientModule,

    SharedModule,
    DashboardRoutingModule,

    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatTooltipModule,
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
