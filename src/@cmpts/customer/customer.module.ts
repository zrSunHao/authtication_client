import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from 'src/@sun/shared/shared.module';
import { CustomerService } from './customer.service';
import { CustomerRoutingModule } from './customer.module.routing';

import { AccountInfoComponent } from './account-info/account-info.component';
import { CustomerConstraintsComponent } from './customer-constraints/customer-constraints.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerLogsComponent } from './customer-logs/customer-logs.component';
import { CustomerRolesComponent } from './customer-roles/customer-roles.component';
import { PeopleInfoComponent } from './people-info/people-info.component';
import { DialogCustomerComponent } from './dialog-customer/dialog-customer.component';
import { DialogConstraintComponent } from './dialog-constraint/dialog-constraint.component';
import { DialogResetComponent } from './dialog-reset/dialog-reset.component';
import { DialogRoleComponent } from './dialog-role/dialog-role.component';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    SharedModule,
    CustomerRoutingModule,

    NgxPermissionsModule.forChild()
  ],
  declarations: [
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerConstraintsComponent,
    CustomerRolesComponent,
    CustomerLogsComponent,
    AccountInfoComponent,
    PeopleInfoComponent,
    DialogCustomerComponent,
    DialogConstraintComponent,
    DialogResetComponent,
    DialogRoleComponent,
  ],
  providers: [
    CustomerService
  ]
})
export class CustomerModule { }
