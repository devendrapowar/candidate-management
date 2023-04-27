import { TestBed } from '@angular/core/testing';

import { LoaderInterceptor } from './loader-interceptor.service';
import { CoreModule } from '../core.module';

describe('LoaderInterceptorService', () => {
  let service: LoaderInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[CoreModule]
    });
    service = TestBed.inject(LoaderInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
