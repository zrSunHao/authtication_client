import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/@sun/shared/shared.module';
import { ConstraintService } from './constraint.service';
import { ConstraintRoutingModule } from './constraint.module.routing';

import { ConstraintComponent } from './constraint.component';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    SharedModule,
    ConstraintRoutingModule,

    NgxPermissionsModule.forChild()
  ],
  declarations: [
    ConstraintComponent,
  ],
  providers: [
    ConstraintService
  ]
})
export class ConstraintModule { }
