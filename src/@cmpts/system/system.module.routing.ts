import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/@sun/shared/guard/auth.guard';
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
        path: 'program/:sysId/:sysName',
        component: SystemProgramComponent,
        canActivate: [AuthGuard],
        data: { permission: 'system_program' }
    },
    {
        path: 'role/:sysId/:sysName',
        component: SystemRoleListComponent,
        canActivate: [AuthGuard],
        data: { permission: 'system_role' }
    },
    {
        path: 'role/funtions/:roleId/:roleName',
        component: SystemRoleFuntionsComponent,
        canActivate: [AuthGuard],
        data: { permission: 'system_role_functions' }
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