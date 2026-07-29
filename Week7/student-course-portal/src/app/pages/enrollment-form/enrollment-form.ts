import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
// FormsModule is required to enable template-driven forms (ngModel, ngForm, validators).
// Without it, Angular does not recognise [(ngModel)] or #ctrl="ngModel" in the template.
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  // FormsModule must be in standalone imports — not in a module — for standalone components.
  imports: [FormsModule, NgIf],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentFormComponent {

  // Form model properties bound via [(ngModel)]
  studentName      = '';
  studentEmail     = '';
  courseId: number | null = null;
  preferredSemester = 'Odd';
  agreeToTerms     = false;

  // Controls success message visibility
  submitted = false;

  onSubmit(form: NgForm): void {
    console.log(form.value);
    console.log(form.valid);
    this.submitted = true;
  }

  onReset(form: NgForm): void {
    form.resetForm();
    this.submitted = false;
  }
}
