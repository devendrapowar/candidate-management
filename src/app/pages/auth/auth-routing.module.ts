import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LinkedinLoginResponseComponent } from './linkedin-login-response/linkedin-login-response.component';

const routes: Routes = [
  { path: '', title: 'Login', component: LoginComponent },
  { path: "linkedInLogin", component: LinkedinLoginResponseComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
