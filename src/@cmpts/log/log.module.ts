import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogRoutingModule } from './log.module.routing';
import { LogComponent } from './log.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/@sun/shared/shared.module';
import { DialogLogDetailComponent } from './dialog-log-detail/dialog-log-detail.component';


@NgModule({
  declarations: [
    LogComponent,
    DialogLogDetailComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    SharedModule,

    LogRoutingModule
  ]
})
export class LogModule { }
