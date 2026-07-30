import { HttpInterceptorFn } from '@angular/common/http';

// Step 88: AuthInterceptor — adds Authorization header to every outgoing HTTP request.
// Registered via provideHttpClient(withInterceptors([authInterceptor])) in app.config.ts.
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Step 89: clone the request and attach the Bearer token
  const authReq = req.clone({
    setHeaders: { Authorization: 'Bearer mock-token-12345' }
  });
  return next(authReq);
};
