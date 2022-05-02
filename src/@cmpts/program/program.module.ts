import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
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
  ],
  providers: [ProgramService]
})
export class ProgramModule { }
