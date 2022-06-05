import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
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
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { JwtInterceptor } from './guard/jwt.interceptor';
import { ErrorInterceptor } from './guard/error.interceptor';

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
  imports: [CommonModule, FormsModule, HttpClientModule, ...mats, NgxPermissionsModule.forChild(),],
  declarations: [...pipes, ...components],
  providers: [
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    { provide: MAT_DATE_LOCALE, useValue: 'zh-CN' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },

    ...services,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  exports: [...exports, ...mats, HttpClientModule]
})
export class SharedModule { }
