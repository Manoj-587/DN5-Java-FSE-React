import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

// ── Custom synchronous validator (Step 53) ──────────────────────────────────
// Returns { noCourseCode: true } when the value starts with 'XX', else null.
function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const val: string = (control.value ?? '').toString().trim();
  return val.toUpperCase().startsWith('XX') ? { noCourseCode: true } : null;
}

// ── Async validator (Step 55) ────────────────────────────────────────────────
// Simulates a server-side email uniqueness check with an 800 ms delay.
// Returns { emailTaken: true } when the email contains 'test@', else null.
function simulateEmailCheck(
  control: AbstractControl
): Promise<ValidationErrors | null> {
  return new Promise(resolve => {
    setTimeout(() => {
      const val: string = (control.value ?? '').toString().toLowerCase();
      resolve(val.includes('test@') ? { emailTaken: true } : null);
    }, 800);
  });
}

@Component({
  selector: 'app-reactive-enrollment-form',
  // ReactiveFormsModule provides formGroup, formControlName, formArrayName directives.
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentFormComponent implements OnInit {

  enrollForm!: FormGroup;
  submitted = false;

  // Step 49: Inject FormBuilder for concise form construction.
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Step 49: Build the reactive form with validators.
    this.enrollForm = this.fb.group({
      studentName:       ['', [Validators.required, Validators.minLength(3)]],
      // simulateEmailCheck is the async validator (third argument).
      studentEmail:      ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      // Step 53: noCourseCode custom validator applied alongside required.
      courseId:          [null, [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      // Validators.requiredTrue ensures the checkbox must be checked (true).
      agreeToTerms:      [false, Validators.requiredTrue],
      // Step 56: FormArray for additional courses.
      additionalCourses: this.fb.array([])
    });
  }

  // ── Step 57: Getter for additionalCourses FormArray ──────────────────────
  // Using a getter avoids casting (enrollForm.get('additionalCourses') as FormArray)
  // in every template expression, keeping the template clean and type-safe.
  get additionalCourses(): FormArray<FormControl> {
    return this.enrollForm.get('additionalCourses') as FormArray<FormControl>;
  }

  // ── Step 56: Add a new course control to the FormArray ───────────────────
  addCourse(): void {
    this.additionalCourses.push(new FormControl('', Validators.required));
  }

  // ── Step 56: Remove a course control by index ────────────────────────────
  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  // ── Step 51: Submit handler ───────────────────────────────────────────────
  onSubmit(): void {
    if (this.enrollForm.invalid) return;

    // enrollForm.value excludes disabled controls.
    // enrollForm.getRawValue() includes disabled controls (even if disabled).
    console.log(this.enrollForm.value);
    console.log(this.enrollForm.getRawValue());

    this.submitted = true;
  }

  onReset(): void {
    this.enrollForm.reset({
      studentName: '',
      studentEmail: '',
      courseId: null,
      preferredSemester: 'Odd',
      agreeToTerms: false
    });
    // Clear all additional courses
    while (this.additionalCourses.length) {
      this.additionalCourses.removeAt(0);
    }
    this.submitted = false;
  }

  // ── Convenience accessors for cleaner template error checks ─────────────
  get f() { return this.enrollForm.controls; }
}
