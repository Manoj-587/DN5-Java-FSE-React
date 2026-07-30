import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

// Step 91: LoadingInterceptor — shows global spinner before every request,
// hides it inside finalize() so it always clears even on error.
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  loadingService.show();

  return next(req).pipe(
    // finalize() runs on both complete and error — guarantees spinner is hidden
    finalize(() => loadingService.hide())
  );
};
