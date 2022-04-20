import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { SystemDetailComponent } from './system-detail/system-detail.component';
import { SystemRoutingModule } from './system.module.routing';
import { SystemRoleDetailComponent } from './system-role-detail/system-role-detail.component';
import { SystemRoleListComponent } from './system-role-list/system-role-list.component';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
  ],
  declarations: [
    SystemComponent,
    SystemDetailComponent,
    SystemRoleListComponent,
    SystemRoleDetailComponent,
  ]
})
export class SystemModule { }
