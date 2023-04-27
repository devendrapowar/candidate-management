import { TestBed } from '@angular/core/testing';

import { CandidateResolver } from './candidate.resolver';

describe('CandidateResolver', () => {
  let resolver: CandidateResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CandidateResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
