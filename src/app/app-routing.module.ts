import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  //localhost:4200/student
  path: 'candidate',
  loadChildren: () => import('./pages/candidate/candidate.module').then(m => m.CandidateModule),
}, {
  //localhost:4200/student
  path: 'login',
  loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
},
{
  path: '**',
  redirectTo: 'login',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
