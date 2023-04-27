import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCandidateComponent } from './new-candidate.component';
import { CandidateModule } from '../candidate.module';

describe('NewCandidateComponent', () => {
  let component: NewCandidateComponent;
  let fixture: ComponentFixture<NewCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateModule],
      declarations: [ NewCandidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
