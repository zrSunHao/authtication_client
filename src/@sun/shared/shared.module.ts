import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';

import { ClipPipe } from './pipes/clip.pipe';
import { PaginatorComponent } from './cmpts/paginator/paginator.component';
import { IconSnackBarComponent } from './cmpts/icon-snack-bar/icon-snack-bar.component';
import { NotifyService } from './services/notify.service';
import { ConfirmDialogComponent } from './cmpts/confirm-dialog/confirm-dialog.component';

const mats = [MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatButtonModule, MatDialogModule, MatSnackBarModule, MatDividerModule,];

const components = [PaginatorComponent, IconSnackBarComponent, ConfirmDialogComponent,];
const services = [NotifyService];
const pipes = [ClipPipe];
const exports = [ClipPipe, PaginatorComponent, ConfirmDialogComponent,];

@NgModule({
  imports: [CommonModule, FormsModule, ...mats],
  declarations: [...pipes, ...components],
  providers: [...services,],
  exports: [...exports]
})
export class SharedModule { }
