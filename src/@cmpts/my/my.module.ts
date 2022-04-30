import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';

import { SharedModule } from 'src/@sun/shared/shared.module';
import { MyRoutingModule } from './my.module.routing';
import { MyService } from './my.service';

import { MyComponent } from './my.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { CustomerConstraintsComponent } from './customer-constraints/customer-constraints.component';
import { CustomerRolesComponent } from './customer-roles/customer-roles.component';
import { DialogResetComponent } from './dialog-reset/dialog-reset.component';
import { PeopleInfoComponent } from './people-info/people-info.component';
import { CustomerLogsComponent } from './customer-logs/customer-logs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    SharedModule,
    MyRoutingModule,

    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
  ],
  declarations: [
    MyComponent,
    AccountInfoComponent,
    CustomerConstraintsComponent,
    CustomerRolesComponent,
    CustomerLogsComponent,
    DialogResetComponent,
    PeopleInfoComponent,
  ],
  providers: [MyService]
})
export class MyModule { }
