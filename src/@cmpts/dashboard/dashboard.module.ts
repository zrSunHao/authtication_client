import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.module.routing';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,

    MatButtonModule,
    MatIconModule,
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
