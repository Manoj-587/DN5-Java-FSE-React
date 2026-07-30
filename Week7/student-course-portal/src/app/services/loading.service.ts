import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Step 91: LoadingService — single source of truth for global HTTP loading state.
// Uses BehaviorSubject so any subscriber immediately gets the current value.
@Injectable({ providedIn: 'root' })
export class LoadingService {
  // Step 91: BehaviorSubject<boolean> — emits true while a request is in-flight
  readonly isLoading$ = new BehaviorSubject<boolean>(false);

  show(): void { this.isLoading$.next(true);  }
  hide(): void { this.isLoading$.next(false); }
}
