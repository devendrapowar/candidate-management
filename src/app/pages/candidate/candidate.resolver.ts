import { Injectable } from '@angular/core';
import {
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CandidateService } from './candidate.service';
import { Candidate } from './model';

@Injectable({
  providedIn: 'root'
})
export class CandidateResolver {
  constructor(private candidateService: CandidateService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Candidate[]> {
    return this.candidateService.getCandidates();
  }
}
