import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateComponent } from './candidate/candidate.component';
import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CandidateService } from './candidate.service';
import { CoreModule } from 'src/app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NewCandidateComponent } from './new-candidate/new-candidate.component';

@NgModule({
  declarations: [
    CandidateComponent,
    CandidateFormComponent,
    CandidateDetailsComponent,
    NewCandidateComponent
  ],
  imports: [
    CandidateRoutingModule,
    CommonModule,
    CoreModule,
    ReactiveFormsModule
  ],
  providers: [CandidateService]
})
export class CandidateModule { }
