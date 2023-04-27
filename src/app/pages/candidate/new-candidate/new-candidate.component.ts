import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Candidate } from '../model';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-new-candidate',
  templateUrl: './new-candidate.component.html',
  styleUrls: ['./new-candidate.component.scss']
})
export class NewCandidateComponent {
  constructor(private router: Router,
    private candidateService: CandidateService) { }

  addCandidate(candidate: Candidate) {
    this.candidateService.createCandidate(candidate).subscribe((res: any) => {
      const obj = this.candidateService.candidateList;
      obj.unshift(res);
      this.candidateService.candidateList = obj;
      this.router.navigate(['/candidate', res.id])
    })
  }
}
