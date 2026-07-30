import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

const API = 'http://localhost:3000';

// Step 63: providedIn:'root' — single shared enrollment state across the whole app.
@Injectable({ providedIn: 'root' })
export class EnrollmentService {

  // Step 63: tracks enrolled course IDs in memory
  private enrolledCourseIds: number[] = [];

  // Step 87: HttpClient injected for getStudentsByCourse()
  constructor(private http: HttpClient) {}

  // Step 63: enroll a course by id
  enroll(courseId: number): void {
    if (!this.isEnrolled(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  // Step 63: unenroll a course by id
  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter(id => id !== courseId);
  }

  // Step 63: returns true if the course is currently enrolled
  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  // Step 63: returns all enrolled course IDs
  getEnrolledCourseIds(): number[] {
    return [...this.enrolledCourseIds];
  }

  // Step 87: GET /students?courseId=:id — used with switchMap in CourseListComponent.
  // switchMap cancels any previous in-flight request when a new courseId is selected,
  // ensuring only the latest selection's response is processed.
  getStudentsByCourse(courseId: number): Observable<Student[]> {
    return this.http.get<Student[]>(`${API}/students?courseId=${courseId}`);
  }

  // Step 81: POST /enrollments — persists a new enrollment to db.json
  createEnrollment(payload: {
    studentName: string;
    studentEmail: string;
    courseId: number;
    semester: string;
  }): Observable<unknown> {
    return this.http.post(`${API}/enrollments`, {
      ...payload,
      enrolledAt: new Date().toISOString().split('T')[0]
    });
  }
}
