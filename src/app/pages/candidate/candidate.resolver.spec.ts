import { TestBed } from '@angular/core/testing';

import { CandidateResolver } from './candidate.resolver';
import { CandidateModule } from './candidate.module';

describe('CandidateResolver', () => {
  let resolver: CandidateResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CandidateModule]
    });
    resolver = TestBed.inject(CandidateResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
