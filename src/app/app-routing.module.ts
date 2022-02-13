import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/@sun/layout/layout.component';

const routes: Routes = [
  { path: 'security', loadChildren: () => import('../@sun/security/security.module').then(m => m.SecurityModule) },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('../@cmpts/dashboard/dashboard.module').then(m => m.DashboardModule) },
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
