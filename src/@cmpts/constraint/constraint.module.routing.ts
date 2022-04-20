import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstraintComponent } from './constraint.component';


const routes: Routes = [
    { path: '', component: ConstraintComponent, },
    { path: '**', component: ConstraintComponent, },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConstraintRoutingModule {
}