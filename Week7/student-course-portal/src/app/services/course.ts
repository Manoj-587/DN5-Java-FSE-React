import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, retry, catchError } from 'rxjs/operators';
import { Course } from '../models/course.model';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class CourseService {

  // Step 78: HttpClient injected — replaces the hardcoded in-memory array
  constructor(private http: HttpClient) {}

  // Steps 79 + 83 + 84 + 85 + 86: GET /courses with full RxJS pipeline
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${API}/courses`).pipe(
      // Step 83: map — transformation: keep only courses with credits > 0
      // map is for transforming data; tap is for side effects (logging, etc.)
      map(courses => courses.filter(c => c.credits > 0)),

      // Step 85: tap — side effect: log count without modifying the stream
      // tap does NOT change the emitted value; use it for logging/debugging only
      tap(courses => console.log(`Courses loaded: ${courses.length}`)),

      // Step 86: retry(2) — retries the HTTP request up to 2 times on failure
      // before passing the error to catchError
      retry(2),

      // Step 84: catchError — returns a friendly error instead of crashing the stream
      catchError(() =>
        throwError(() => new Error('Failed to load courses. Please try again.'))
      )
    );
  }

  // Step 79: GET /courses/:id — returns Observable<Course | undefined>
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${API}/courses/${id}`).pipe(
      retry(2),
      catchError(() =>
        throwError(() => new Error('Failed to load course. Please try again.'))
      )
    );
  }

  // Step 81: POST /courses — creates a new course, returns Observable<Course>
  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(`${API}/courses`, course);
  }

  // Step 82: PUT /courses/:id — updates an existing course
  updateCourse(id: number, course: Partial<Course>): Observable<Course> {
    return this.http.put<Course>(`${API}/courses/${id}`, course);
  }

  // Step 82: DELETE /courses/:id — removes a course
  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${API}/courses/${id}`);
  }
}
