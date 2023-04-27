import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateFormComponent } from './candidate-form.component';
import { CandidateModule } from '../candidate.module';

describe('CandidateFormComponent', () => {
  let component: CandidateFormComponent;
  let fixture: ComponentFixture<CandidateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateModule],
      declarations: [ CandidateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
