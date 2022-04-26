import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramDetailComponent } from './program-detail/program-detail.component';
import { ProgramComponent } from './program.component';

const routes: Routes = [
    { path: '', component: ProgramComponent, },
    { path: 'detail/:id/:type/:name', component: ProgramDetailComponent, },
    { path: '**', component: ProgramComponent, },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProgramRoutingModule {
}