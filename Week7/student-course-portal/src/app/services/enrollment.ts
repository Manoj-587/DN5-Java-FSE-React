import { Injectable } from '@angular/core';
import { CourseService } from './course';
import { Course } from '../models/course.model';

// Step 63: providedIn:'root' — single shared enrollment state across the whole app.
@Injectable({ providedIn: 'root' })
export class EnrollmentService {

  // Step 63: tracks enrolled course IDs
  private enrolledCourseIds: number[] = [];

  // Step 64: Service-to-service injection — EnrollmentService depends on CourseService
  // to resolve full Course objects from stored IDs.
  constructor(private courseService: CourseService) {}

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

  // Step 63 + 64: resolves enrolled IDs into full Course objects via CourseService
  getEnrolledCourses(): Course[] {
    return this.enrolledCourseIds
      .map(id => this.courseService.getCourseById(id))
      .filter((c): c is Course => c !== undefined);
  }
}
