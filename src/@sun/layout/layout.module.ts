import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    LayoutComponent
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }
