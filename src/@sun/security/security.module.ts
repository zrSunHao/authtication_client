import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security.module.routing';
import { ForgetComponent } from './forget/forget.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    SecurityRoutingModule,
  ],
  declarations: [
    ForgetComponent,
    LoginComponent,
    RegisterComponent,
  ]
})
export class SecurityModule { }
