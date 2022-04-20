import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramComponent } from './program.component';
import { ProgramDetailComponent } from './program-detail/program-detail.component';
import { ProgramRoutingModule } from './program.module.routing';

@NgModule({
  imports: [
    CommonModule,
    ProgramRoutingModule,
  ],
  declarations: [
    ProgramComponent,
    ProgramDetailComponent,
  ]
})
export class ProgramModule { }
