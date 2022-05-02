import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';

import { ProgramService } from './program.service';
import { SharedModule } from 'src/@sun/shared/shared.module';
import { ProgramRoutingModule } from './program.module.routing';

import { ProgramComponent } from './program.component';
import { ProgramDetailComponent } from './program-detail/program-detail.component';
import { ProgramSectionComponent } from './program-section/program-section.component';
import { DialogFunctionComponent } from './dialog-function/dialog-function.component';
import { DialogProgramComponent } from './dialog-program/dialog-program.component';
import { DialogSectionComponent } from './dialog-section/dialog-section.component';
import { ProgramFunctionComponent } from './program-function/program-function.component';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    SharedModule,
    ProgramRoutingModule,

    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,

    NgxPermissionsModule.forChild(),
  ],
  declarations: [
    ProgramComponent,
    ProgramDetailComponent,
    ProgramSectionComponent,
    ProgramFunctionComponent,
    DialogProgramComponent,
    DialogSectionComponent,
    DialogFunctionComponent,
  ],
  providers: [ProgramService]
})
export class ProgramModule { }
