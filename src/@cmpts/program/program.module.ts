import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { PgmCtmsComponent } from './pgm-ctms/pgm-ctms.component';
import { PgmNotOwnedCtmsComponent } from './pgm-not-owned-ctms/pgm-not-owned-ctms.component';
import { PgmOwnedCtmsComponent } from './pgm-owned-ctms/pgm-owned-ctms.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    SharedModule,
    ProgramRoutingModule,

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
    PgmCtmsComponent,
    PgmNotOwnedCtmsComponent,
    PgmOwnedCtmsComponent,
  ],
  providers: [ProgramService]
})
export class ProgramModule { }
