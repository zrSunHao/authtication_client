import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/@sun/shared/shared.module';
import { SystemService } from './system.service';
import { SystemRoutingModule } from './system.module.routing';

import { SystemComponent } from './system.component';
import { SystemRoleListComponent } from './system-role-list/system-role-list.component';
import { SystemProgramComponent } from './system-program/system-program.component';
import { SystemSectionComponent } from './system-section/system-section.component';
import { SystemRoleFuntionsComponent } from './system-role-funtions/system-role-funtions.component';
import { DialogSystemComponent } from './dialog-system/dialog-system.component';
import { DialogRoleComponent } from './dialog-role/dialog-role.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { SysCustomersComponent } from './sys-customers/sys-customers.component';
import { DialogCustomerRoleComponent } from './dialog-customer-role/dialog-customer-role.component';
import { DialogCtmCttComponent } from './dialog-ctm-ctt/dialog-ctm-ctt.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    SystemRoutingModule,
    SharedModule,

    NgxPermissionsModule.forChild()
  ],
  declarations: [
    SystemComponent,
    SysCustomersComponent,
    SystemProgramComponent,
    SystemRoleListComponent,
    SystemSectionComponent,
    SystemRoleFuntionsComponent,
    DialogSystemComponent,
    DialogRoleComponent,
    DialogCustomerRoleComponent,
    DialogCtmCttComponent,
  ],
  providers: [SystemService]
})
export class SystemModule { }
