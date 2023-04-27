import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CandidateComponent } from './candidate/candidate.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CandidateResolver } from './candidate.resolver';
import { NewCandidateComponent } from './new-candidate/new-candidate.component';

const routes: Routes = [
  {
    path: '',
    title: 'Candidate',
    component: CandidateComponent,
    resolve: { candidates: CandidateResolver },
    children: [
      { path: 'new', component: NewCandidateComponent },
      { path: ':id', component: CandidateDetailsComponent }, {
        path: '**',
        redirectTo: 'new',
        pathMatch: 'full'
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
