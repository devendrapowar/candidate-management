import { TestBed } from '@angular/core/testing';

import { CandidateService } from './candidate.service';
import { HttpClientModule } from '@angular/common/http';
import { CandidateModule } from './candidate.module';
import { CoreModule } from 'src/app/core/core.module';

describe('CandidateService', () => {
  let service: CandidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, CandidateModule, CoreModule]
    });
    service = TestBed.inject(CandidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
