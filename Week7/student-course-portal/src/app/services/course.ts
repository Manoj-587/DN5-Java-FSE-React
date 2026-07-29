import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

// Step 58: providedIn:'root' registers a single shared instance (singleton) across the entire app.
// Every component that injects CourseService receives the SAME instance.
@Injectable({ providedIn: 'root' })
export class CourseService {

  // Step 58: private courses array — single source of truth for all course data
  private courses: Course[] = [
    { id: 1, name: 'Angular Fundamentals', code: 'ANG101', credits: 3, gradeStatus: 'passed',  enrolled: true  },
    { id: 2, name: 'Spring Boot Basics',   code: 'SPR201', credits: 4, gradeStatus: 'failed',  enrolled: false },
    { id: 3, name: 'Data Structures',      code: 'DSA301', credits: 3, gradeStatus: 'pending', enrolled: true  },
    { id: 4, name: 'Database Management',  code: 'DBM401', credits: 3, gradeStatus: 'passed',  enrolled: false },
    { id: 5, name: 'Cloud Computing',      code: 'CLD501', credits: 4, gradeStatus: 'pending', enrolled: true  }
  ];

  // Step 58: returns all courses
  getCourses(): Course[] {
    return this.courses;
  }

  // Step 58: returns a single course by id, or undefined if not found
  getCourseById(id: number): Course | undefined {
    return this.courses.find(c => c.id === id);
  }

  // Step 58: adds a new course to the shared array
  // Because this is a singleton, all components see the updated array immediately.
  addCourse(course: Course): void {
    this.courses.push(course);
  }
}
