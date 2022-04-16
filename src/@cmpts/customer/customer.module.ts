import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AccountInfoComponent } from './account-info/account-info.component';
import { CustomerConstraintsComponent } from './customer-constraints/customer-constraints.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerLogsComponent } from './customer-logs/customer-logs.component';
import { CustomerRolesComponent } from './customer-roles/customer-roles.component';
import { PeopleInfoComponent } from './people-info/people-info.component';
import { CustomerRoutingModule } from './customer.module.routing';
import { SharedModule } from 'src/@sun/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    CustomerRoutingModule,

    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatTooltipModule,
  ],
  declarations: [
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerConstraintsComponent,
    CustomerRolesComponent,
    CustomerLogsComponent,
    AccountInfoComponent,
    PeopleInfoComponent,
  ]
})
export class CustomerModule { }
