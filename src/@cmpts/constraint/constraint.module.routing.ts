import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/@sun/shared/guard/auth.guard';
import { ConstraintComponent } from './constraint.component';


const routes: Routes = [
    {
        path: '',
        component: ConstraintComponent,
        canActivate: [AuthGuard],
        data: { permission: 'constraint' }
    },
    {
        path: '**',
        component: ConstraintComponent,
        canActivate: [AuthGuard],
        data: { permission: 'constraint' }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConstraintRoutingModule {
}