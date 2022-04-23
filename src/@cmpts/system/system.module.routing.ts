import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemProgramComponent } from './system-program/system-program.component';
import { SystemRoleFuntionsComponent } from './system-role-funtions/system-role-funtions.component';
import { SystemRoleListComponent } from './system-role-list/system-role-list.component';
import { SystemComponent } from './system.component';

const routes: Routes = [
    { path: '', component: SystemComponent, },
    { path: 'program/:systemId', component: SystemProgramComponent, },
    { path: 'role/:systemId', component: SystemRoleListComponent, },
    { path: 'role/funtions/:roleId', component: SystemRoleFuntionsComponent, },
    { path: '**', component: SystemComponent, },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemRoutingModule {
}