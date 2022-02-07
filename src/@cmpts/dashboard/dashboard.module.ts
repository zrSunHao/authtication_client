import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.module.routing';
import { CustomerActivityComponent } from './customer-activity/customer-activity.component';
import { LogActivityComponent } from './log-activity/log-activity.component';
import { ConstraintActivityComponent } from './constraint-activity/constraint-activity.component';
import { WidgetActivityComponent } from './widget-activity/widget-activity.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,

    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
  ],
  declarations: [
    DashboardComponent,
    CustomerActivityComponent,
    LogActivityComponent,
    ConstraintActivityComponent,
    WidgetActivityComponent,
  ]
})
export class DashboardModule { }
