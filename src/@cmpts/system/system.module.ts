import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';

import { SharedModule } from 'src/@sun/shared/shared.module';
import { SystemRoutingModule } from './system.module.routing';

import { SystemComponent } from './system.component';
import { SystemRoleDetailComponent } from './system-role-detail/system-role-detail.component';
import { SystemRoleListComponent } from './system-role-list/system-role-list.component';
import { SystemProgramComponent } from './system-program/system-program.component';
import { SystemSectionComponent } from './system-section/system-section.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    SystemRoutingModule,
    SharedModule,

    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
  ],
  declarations: [
    SystemComponent,
    SystemProgramComponent,
    SystemRoleListComponent,
    SystemRoleDetailComponent,
    SystemSectionComponent,
  ]
})
export class SystemModule { }
