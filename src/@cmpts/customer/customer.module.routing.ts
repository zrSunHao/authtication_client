import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/@sun/shared/guard/auth.guard';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerListComponent } from './customer-list/customer-list.component';


const routes: Routes = [
    {
        path: '',
        component: CustomerListComponent,
        canActivate: [AuthGuard],
        data: { permission: 'customer' }
    },
    {
        path: 'detail/:id/:name',
        component: CustomerDetailComponent,
        canActivate: [AuthGuard],
        data: { permission: 'customer_detail' }
    },
    {
        path: '**',
        component: CustomerListComponent,
        canActivate: [AuthGuard],
        data: { permission: 'customer' }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule {
}