import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    LayoutComponent
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
