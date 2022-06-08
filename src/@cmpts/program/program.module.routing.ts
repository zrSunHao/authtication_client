import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/@sun/shared/guard/auth.guard';
import { PgmCtmsComponent } from './pgm-ctms/pgm-ctms.component';
import { ProgramDetailComponent } from './program-detail/program-detail.component';
import { ProgramComponent } from './program.component';

const routes: Routes = [
    {
        path: '',
        component: ProgramComponent,
        canActivate: [AuthGuard],
        data: { permission: 'program' }
    },
    {
        path: 'detail/:id/:category/:name',
        component: ProgramDetailComponent,
        canActivate: [AuthGuard],
        data: { permission: 'pgm_cfg' }
    },
    {
        path: 'customer/:id/:category/:name',
        component: PgmCtmsComponent,
        canActivate: [AuthGuard],
        data: { permission: 'pgm_ctm' }
    },
    {
        path: '**',
        component: ProgramComponent,
        canActivate: [AuthGuard],
        data: { permission: 'program' }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProgramRoutingModule {
}