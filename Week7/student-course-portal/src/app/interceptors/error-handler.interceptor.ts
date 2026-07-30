import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

// Step 90: ErrorHandlerInterceptor — centralised HTTP error handling.
// 401 → redirect to home; 500 → show global notification; always re-throws.
export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // Step 90: unauthorised — send user back to home
        router.navigate(['/']);
      } else if (error.status === 500) {
        // Step 90: server error — display a global notification via alert (no extra service needed)
        alert('A server error occurred. Please try again later.');
      }
      // Step 90: always re-throw so individual subscribers can also handle the error
      return throwError(() => error);
    })
  );
};
