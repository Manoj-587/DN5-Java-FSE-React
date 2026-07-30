import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Step 68: NotFoundComponent — displayed for all unmatched routes
@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="not-found">
      <h2>404 — Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <a routerLink="/">Go Home</a>
    </section>
  `
})
export class NotFoundComponent {}
