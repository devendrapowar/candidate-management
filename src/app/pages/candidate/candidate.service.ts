import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { Candidate } from './model';
const subUrl = 'candidate';
@Injectable()
export class CandidateService {
  private candidates: Candidate[] = [];

  constructor(private apiService: ApiService) { }

  get stepper() {
    return [{
      id: 1,
      label: 'Personal Details'
    }, {
      id: 2,
      label: 'Education'
    }, {
      id: 3,
      label: 'Skills'
    }, {
      id: 4,
      label: 'Experience'
    }]
  }

  get hobbies() {
    return ['Reading', 'Music', 'Swimming', 'Cooking', 'Dancing']
  }

  get candidateList() {
    return this.candidates;
  }

  set candidateList(candidates: Candidate[]) {
    this.candidates = candidates;
  }

  getCandidates(): Observable<Candidate[]> {
    return this.apiService.get(subUrl);
  }

  createCandidate(candidate: Candidate): Observable<any> {
    return this.apiService.post(subUrl, candidate);
  }

  updateCandidate(id: string | undefined, candidate: Candidate | undefined): Observable<any> {
    return this.apiService.put(subUrl + '/' + id, candidate);
  }

  deleteCandidates(id: string | undefined): Observable<any> {
    return this.apiService.delete(subUrl + '/' + id);
  }

  getDetailsCandidate(id: string | null): Candidate | undefined {
    return this.candidateList.find((candidate: Candidate) => { return candidate.id === id })
  }
}
