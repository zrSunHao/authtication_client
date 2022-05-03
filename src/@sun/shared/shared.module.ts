import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';

import { NgxPermissionsModule } from 'ngx-permissions';

import { PaginatorComponent } from './cmpts/paginator/paginator.component';
import { IconSnackBarComponent } from './cmpts/icon-snack-bar/icon-snack-bar.component';
import { ConfirmDialogComponent } from './cmpts/confirm-dialog/confirm-dialog.component';

import { ClipPipe } from './pipes/clip.pipe';

import { NotifyService } from './services/notify.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guard/auth.guard';

const mats = [
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatSelectModule,
  MatTableModule,
  MatTooltipModule,
  MatDialogModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatDividerModule,
  MatCheckboxModule,
  MatMenuModule];

const components = [PaginatorComponent, IconSnackBarComponent, ConfirmDialogComponent,];
const services = [NotifyService, AuthService];
const pipes = [ClipPipe];
const exports = [ClipPipe, PaginatorComponent, ConfirmDialogComponent,];

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule, ...mats,NgxPermissionsModule.forChild(),],
  declarations: [...pipes, ...components],
  providers: [...services, AuthGuard],
  exports: [...exports, ...mats]
})
export class SharedModule { }
