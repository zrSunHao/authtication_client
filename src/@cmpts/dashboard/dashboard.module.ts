import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.module.routing';

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
  declarations: [DashboardComponent]
})
export class DashboardModule { }
