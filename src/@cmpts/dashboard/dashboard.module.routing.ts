import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/@sun/shared/guard/auth.guard';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        data: { permission: 'dashboard' }
    },
    {
        path: '**',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        data: { permission: 'dashboard' }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}