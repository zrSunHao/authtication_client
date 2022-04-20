import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstraintComponent } from './constraint.component';
import { ConstraintRoutingModule } from './constraint.module.routing';

@NgModule({
  imports: [
    CommonModule,
    ConstraintRoutingModule,
  ],
  declarations: [ConstraintComponent]
})
export class ConstraintModule { }
