import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { ClipPipe } from './pipes/clip.pipe';
import { PaginatorComponent } from './cmpts/paginator/paginator.component';

@NgModule({
  imports: [
    CommonModule,

    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  declarations: [
    ClipPipe,
    PaginatorComponent,
  ],
  exports: [
    ClipPipe,
    PaginatorComponent,
  ]
})
export class SharedModule { }
