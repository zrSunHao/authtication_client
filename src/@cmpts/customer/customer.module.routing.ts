import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerListComponent } from './customer-list/customer-list.component';


const routes: Routes = [
    { path: '', component: CustomerListComponent, },
    { path: 'detail/:id/:name', component: CustomerDetailComponent, },
    { path: '**', component: CustomerListComponent, },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule {
}