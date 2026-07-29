import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  imports: [NgFor, NgIf, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent {

  // Step 22: Five hardcoded course objects
  courses: Course[] = [
    { id: 1, name: 'Angular Fundamentals',   code: 'ANG101', credits: 3 },
    { id: 2, name: 'Spring Boot Basics',      code: 'SPR201', credits: 4 },
    { id: 3, name: 'Data Structures',         code: 'DSA301', credits: 3 },
    { id: 4, name: 'Database Management',     code: 'DBM401', credits: 3 },
    { id: 5, name: 'Cloud Computing',         code: 'CLD501', credits: 4 }
  ];

  // Step 23: selectedCourseId
  selectedCourseId: number | null = null;

  // Step 23: onEnroll handler
  onEnroll(courseId: number): void {
    this.selectedCourseId = courseId;
  }
}
