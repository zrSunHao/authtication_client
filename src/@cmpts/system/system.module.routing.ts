import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/@sun/shared/guard/auth.guard';
import { SysCustomersComponent } from './sys-customers/sys-customers.component';
import { SystemProgramComponent } from './system-program/system-program.component';
import { SystemRoleFuntionsComponent } from './system-role-funtions/system-role-funtions.component';
import { SystemRoleListComponent } from './system-role-list/system-role-list.component';
import { SystemComponent } from './system.component';

const routes: Routes = [
    {
        path: '', component: SystemComponent,
        canActivate: [AuthGuard],
        data: { permission: 'system' }
    },
    {
        path: 'customer/:sysId/:sysName',
        component: SysCustomersComponent,
        canActivate: [AuthGuard],
        data: { permission: 'sys_ctms' }
    },
    {
        path: 'program/:sysId/:sysName',
        component: SystemProgramComponent,
        canActivate: [AuthGuard],
        data: { permission: 'sys_pgm_cfg' }
    },
    {
        path: 'role/:sysId/:sysName',
        component: SystemRoleListComponent,
        canActivate: [AuthGuard],
        data: { permission: 'sys_role' }
    },
    {
        path: 'role/funtions/:roleId/:roleName',
        component: SystemRoleFuntionsComponent,
        canActivate: [AuthGuard],
        data: { permission: 'sys_role_cfg' }
    },
    {
        path: '**',
        component: SystemComponent,
        canActivate: [AuthGuard],
        data: { permission: 'system' },
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemRoutingModule {
}