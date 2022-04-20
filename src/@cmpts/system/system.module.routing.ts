import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemDetailComponent } from './system-detail/system-detail.component';
import { SystemRoleDetailComponent } from './system-role-detail/system-role-detail.component';
import { SystemRoleListComponent } from './system-role-list/system-role-list.component';
import { SystemComponent } from './system.component';

const routes: Routes = [
    { path: '', component: SystemComponent, },
    { path: 'detail/:id', component: SystemDetailComponent, },
    { path: 'role-list/:systemId', component: SystemRoleListComponent, },
    { path: 'role/:roleId', component: SystemRoleDetailComponent, },
    { path: '**', component: SystemComponent, },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemRoutingModule {
}