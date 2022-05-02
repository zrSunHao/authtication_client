import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SecurityRoutingModule } from './security.module.routing';
import { ForgetComponent } from './forget/forget.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatNativeDateModule } from '@angular/material/core';
import { SharedModule } from '../shared/shared.module';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,

    NgxPermissionsModule.forChild(),

    SharedModule,
    SecurityRoutingModule,
  ],
  declarations: [
    ForgetComponent,
    LoginComponent,
    RegisterComponent,
  ]
})
export class SecurityModule { }
