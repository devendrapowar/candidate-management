import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from '../model';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss']
})
export class CandidateDetailsComponent implements OnInit {
  public showEditForm: boolean = false;
  public selectedCandidate: Candidate | undefined;
  public selectedStep: any;
  public steps: any;
  public stepIndex: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
    private candidateService: CandidateService,
    private router: Router) {
    this.steps = this.candidateService.stepper;
    this.selectedStep = this.steps[0];
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.selectedCandidate = this.candidateService.getDetailsCandidate(id);
      window.scroll(0, 0);
      document.getElementById("my_link")?.scrollIntoView();
    });
  }

  removeCandidate(): void {
    this.candidateService.deleteCandidates(this.selectedCandidate?.id).subscribe((res) => {
      const index = this.candidateService.candidateList.findIndex((candidate: Candidate) => { return candidate.id === this.selectedCandidate?.id });
      if (index > -1) {
        this.candidateService.candidateList.splice(index, 1);
        this.router.navigate(['/', 'candidate', this.candidateService.candidateList[0].id]);
      }
    })
  }
  showEdit(): void {
    this.showEditForm = !this.showEditForm;
  }

  onImageError(entity: Candidate | undefined): void {
    if (entity?.profile_picture) {
      entity.profile_picture = 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png';

    }
  }

  updateCandidate(updatedForm: Candidate | undefined) {
    const update: any = { ...updatedForm, id: this.selectedCandidate?.id }
    this.candidateService.updateCandidate(this.selectedCandidate?.id, update).subscribe((res: any) => {
      this.selectedCandidate = res;
      this.showEdit();
    })
  }

  changeStep(number: number) {
    this.stepIndex += number;
    this.selectedStep = this.steps[this.stepIndex];
  }
}
