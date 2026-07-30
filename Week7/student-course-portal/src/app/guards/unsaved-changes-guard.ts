import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ReactiveEnrollmentFormComponent } from '../pages/reactive-enrollment-form/reactive-enrollment-form';

// Step 77: UnsavedChangesGuard — warns user before leaving a dirty reactive form
@Injectable({ providedIn: 'root' })
export class UnsavedChangesGuard implements CanDeactivate<ReactiveEnrollmentFormComponent> {

  canDeactivate(component: ReactiveEnrollmentFormComponent): boolean {
    if (component.enrollForm?.dirty) {
      return window.confirm('You have unsaved changes. Leave?');
    }
    return true;
  }
}
