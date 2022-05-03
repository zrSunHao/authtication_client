import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/@sun/shared/guard/auth.guard';
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
        path: 'detail/:id/:type/:name',
        component: ProgramDetailComponent,
        canActivate: [AuthGuard],
        data: { permission: 'pgm_cfg' }
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