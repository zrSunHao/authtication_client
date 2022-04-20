import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/@sun/layout/layout.component';

const routes: Routes = [
  { path: 'security', loadChildren: () => import('../@sun/security/security.module').then(m => m.SecurityModule) },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('../@cmpts/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'customer', loadChildren: () => import('../@cmpts/customer/customer.module').then(m => m.CustomerModule) },
      { path: 'program', loadChildren: () => import('../@cmpts/program/program.module').then(m => m.ProgramModule) },
      { path: 'system', loadChildren: () => import('../@cmpts/system/system.module').then(m => m.SystemModule) },
      { path: 'constraint', loadChildren: () => import('../@cmpts/constraint/constraint.module').then(m => m.ConstraintModule) },
      { path: '**', redirectTo: '/dashboard/' },
    ],
  },
  { path: '**', redirectTo: '/dashboard/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
