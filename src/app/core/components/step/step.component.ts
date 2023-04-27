import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Step } from './model';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent {
  @Input() steps: Step[] = []
  @Input() selectedStep!: Step;
  @Output() selectedStepChange = new EventEmitter<Step>();
  constructor() {
  }

  // select(step: Step) {
  //   this.selectedStep = step;
  //   this.selectedStepChange.emit(this.selectedStep);
  // }

}
