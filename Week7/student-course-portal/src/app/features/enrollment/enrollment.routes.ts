import { Routes } from '@angular/router';
import { UnsavedChangesGuard } from '../../guards/unsaved-changes-guard';

// Step 73: Lazy-loaded enrollment feature routes
// Loaded only when the user navigates to /enroll
export const enrollmentRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../pages/enrollment-form/enrollment-form').then(m => m.EnrollmentFormComponent)
  },
  {
    path: 'reactive',
    loadComponent: () =>
      import('../../pages/reactive-enrollment-form/reactive-enrollment-form').then(
        m => m.ReactiveEnrollmentFormComponent
      ),
    // Step 77: UnsavedChangesGuard — warns before leaving a dirty form
    canDeactivate: [UnsavedChangesGuard]
  }
];
