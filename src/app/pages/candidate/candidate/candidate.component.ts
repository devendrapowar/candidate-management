
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Candidate } from '../model';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  public candidateList: Candidate[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ candidates }) => {
      this.candidateService.candidateList = candidates;
      this.candidateList = this.candidateService.candidateList;
    })
  }
}
