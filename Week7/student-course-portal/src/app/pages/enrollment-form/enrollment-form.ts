import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-enrollment-form',
  imports: [FormsModule, NgIf],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentFormComponent {

  studentName      = '';
  studentEmail     = '';
  courseId: number | null = null;
  preferredSemester = 'Odd';
  agreeToTerms     = false;
  submitted        = false;
  errorMessage     = '';

  // Step 81: inject EnrollmentService to POST enrollment to db.json
  constructor(private enrollmentService: EnrollmentService) {}

  onSubmit(form: NgForm): void {
    if (form.invalid || !this.courseId) return;

    // Step 81: POST new enrollment — createCourse() via EnrollmentService
    this.enrollmentService.createEnrollment({
      studentName:  this.studentName,
      studentEmail: this.studentEmail,
      courseId:     this.courseId,
      semester:     this.preferredSemester
    }).subscribe({
      next: () => { this.submitted = true; this.errorMessage = ''; },
      error: () => { this.errorMessage = 'Enrollment failed. Please try again.'; }
    });
  }

  onReset(form: NgForm): void {
    form.resetForm();
    this.submitted    = false;
    this.errorMessage = '';
  }
}
