import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Step 68 + 72: CoursesLayoutComponent — parent shell for all /courses/* routes
@Component({
  selector: 'app-courses-layout',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class CoursesLayoutComponent {}
