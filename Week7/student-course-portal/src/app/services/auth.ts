import { Injectable } from '@angular/core';

// Step 75: AuthService — single source of truth for authentication state
@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn = true;
}
