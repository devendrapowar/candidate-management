import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LinkedinLoginResponseComponent } from './linkedin-login-response/linkedin-login-response.component';

@NgModule({
  declarations: [
    LoginComponent,
    LinkedinLoginResponseComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule
  ]
})
export class AuthModule { }
