import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CandidateService } from '../candidate.service';
import { Candidate } from '../model';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.scss']
})
export class CandidateFormComponent implements OnInit {
  @Input() candidateValue: Candidate | undefined = {} as Candidate;
  @Output() onSubmit = new EventEmitter<Candidate>();
  public candidateForm: FormGroup = {} as FormGroup;
  public hobbies: string[];
  public steps: any;
  public selectedStep: any;
  public stepIndex: number = 0;

  constructor(private fb: FormBuilder, private candidateService: CandidateService) {
    this.hobbies = this.candidateService.hobbies;
    this.steps = this.candidateService.stepper;
    this.selectedStep = this.steps[0];
  }

  ngOnInit(): void {
    this.candidateForm = this.fb.group({
      profile_picture: [this.candidateValue?.profile_picture],
      name: [this.candidateValue?.name],
      address: [this.candidateValue?.address],
      phone: [this.candidateValue?.phone],
      email: [this.candidateValue?.email],
      gender: [this.candidateValue?.gender?.toLowerCase()],
      hobbies: this.fb.array([]),
      education: this.fb.array([]),
      skills: this.fb.array([]),
      experience: this.fb.array([])
    });
    if (this.candidateValue?.hobbies && this.candidateValue?.hobbies.length) {
      this.candidateValue?.hobbies.forEach((value: string) => {
        this.hobbiesForm.push(this.fb.control(value));
      })
    }
    if (this.candidateValue?.education && this.candidateValue?.education.length) {
      this.candidateValue.education.forEach((edu: any) => {
        const form = this.eductionGroup;
        form.setValue(edu);
        this.add(this.educationForm, form)
      })
    } else {
      this.add(this.educationForm, this.eductionGroup)
    }

    if (this.candidateValue?.skills && this.candidateValue?.skills.length) {
      this.candidateValue.skills.forEach((skill: any) => {
        const form = this.skillsGroup;
        form.setValue(skill);
        this.add(this.skillsForm, form)
      })
    } else {
      this.add(this.skillsForm, this.skillsGroup)
    }

    if (this.candidateValue?.experience && this.candidateValue?.experience.length) {
      this.candidateValue.experience.forEach((exp: any) => {
        const form = this.experienceGroup;
        form.setValue(exp);
        this.add(this.experienceForm, form)
      })
    } else {
      this.add(this.experienceForm, this.experienceGroup)
    }
  }

  get eductionGroup(): FormGroup {
    return this.fb.group({
      institute: [''],
      degree: [''],
      percentage: [''],
      pass_out_year: ['']
    })
  }
  get skillsGroup(): FormGroup {
    return this.fb.group({
      name: [''],
      experience: ['']
    })
  }
  get experienceGroup(): FormGroup {
    return this.fb.group({
      company: [''],
      project: [''],
      role: [''],
      team_size: ['4'],
      duration_from: [''],
      duration_to: ['']
    })
  }

  get hobbiesForm() {
    return this.candidateForm.get('hobbies') as FormArray;
  }

  get educationForm() {
    return this.candidateForm.get('education') as FormArray;
  }
  get skillsForm() {
    return this.candidateForm.get('skills') as FormArray;
  }
  get experienceForm() {
    return this.candidateForm.get('experience') as FormArray;
  }

  add(formArray: FormArray, group: FormGroup) {
    formArray.push(group);
  }
  remove(formArray: FormArray, index: number) {
    formArray.removeAt(index);
  }

  isChecked(hobby: string) {
    return this.hobbiesForm?.value.findIndex((item: string) => { return item === hobby }) > -1;
  }

  onCheckChange(event: any) {
    const formArray: FormArray = this.hobbiesForm;
    if (event.target.checked) {
      formArray.push(new FormControl(event.target.value));
    }
    else {
      formArray.controls.forEach((ctrl: any, index: number) => {
        if (ctrl.value == event.target.value) {
          formArray.removeAt(index);
          return;
        }
      });
    }
  }

  submitForm() {
    this.onSubmit.emit(this.candidateForm.value);
  }

  changeStep(number: number) {
    this.stepIndex += number;
    this.selectedStep = this.steps[this.stepIndex];
  }

}
