import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CoursesLayoutComponent } from './pages/courses-layout/courses-layout';
import { CourseListComponent } from './pages/course-list/course-list';
import { CourseDetailComponent } from './pages/course-detail/course-detail';
import { StudentProfileComponent } from './pages/student-profile/student-profile';
import { NotFoundComponent } from './pages/not-found/not-found';
import { AuthGuard } from './guards/auth-guard';

// Steps 68–77: Full routing configuration
export const routes: Routes = [
  // Step 68: Home
  { path: '', component: HomeComponent },

  // Steps 68 + 72: Nested courses routes under CoursesLayoutComponent
  {
    path: 'courses',
    component: CoursesLayoutComponent,
    children: [
      // Step 72: '' -> CourseListComponent (default child)
      { path: '', component: CourseListComponent },
      // Steps 68 + 69: ':id' -> CourseDetailComponent
      { path: ':id', component: CourseDetailComponent }
    ]
  },

  // Step 76: /profile protected by AuthGuard
  { path: 'profile', component: StudentProfileComponent, canActivate: [AuthGuard] },

  // Steps 73 + 74 + 76: /enroll lazy-loads enrollment feature; protected by AuthGuard
  {
    path: 'enroll',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/enrollment/enrollment.routes').then(m => m.enrollmentRoutes)
  },

  // Step 68: ** -> NotFoundComponent (replaces old redirectTo:'')
  { path: '**', component: NotFoundComponent }
];
