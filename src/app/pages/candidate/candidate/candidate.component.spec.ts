import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateComponent } from './candidate.component';
import { RouterModule } from '@angular/router';
import { CandidateService } from '../candidate.service';
import { CandidateModule } from '../candidate.module';

describe('CandidateComponent', () => {
  let component: CandidateComponent;
  let fixture: ComponentFixture<CandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), CandidateModule],
      declarations: [CandidateComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have candidate list`, () => {
    const fixture = TestBed.createComponent(CandidateComponent);
    const app = fixture.componentInstance;
    expect(app.candidateList).toEqual([]);
  });
});
